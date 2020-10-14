import {
    v4 as uuidv4
} from 'uuid';
import { IContact } from '../../interface/IContact';
import { availableKeysContact } from '../../type/sharedTypes';
import { Validator } from '../Validator/Validator'


export class Contact implements IContact {
    uuid: string;
    name: string;
    surname: string;
    email: string
    createDate: string;

    constructor(name: string, surname: string, email: string) {
        Validator.isEmptyString(name)
        Validator.isEmptyString(surname)
        Validator.isWrongEmail(email)

        this.uuid = uuidv4();
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.createDate = new Date().toLocaleString();
    }
    modificationDate(): void {
        this.createDate = Date.now().toLocaleString()
    }

    show(): string {
        return (
            `
            Imię: ${this.name},
            Nazwisko: ${this.surname},
            Email: ${this.email},
            Data utworzenia: ${this.createDate},
            ID:${this.uuid}
            `
        )
    }

    update(key: availableKeysContact, value: string): void {
        Validator.isEmptyString(value)
        if (key === 'email') {
            Validator.isWrongEmail(value)
        }
        this[key] = value
    }
}