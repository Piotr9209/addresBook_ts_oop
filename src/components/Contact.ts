import {
    v4 as uuidv4
} from 'uuid';
import { IContact } from '../interface/IContact';
import { availableKeys } from '../type/sharedTypes';
import { Validator } from './Validator'


export class Contact implements IContact {
    uuid: string;
    name: string;
    surname: string;
    email: string
    updatedDate: string;

    constructor(name: string, surname: string, email: string) {
        Validator.isEmptyString(name)
        Validator.isEmptyString(surname)
        Validator.isWrongEmail(email)

        this.uuid = uuidv4();
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.updatedDate = Date.now().toLocaleString();
    }
    updateDate(): string {
        return this.updatedDate = Date.now().toLocaleString()
    }

    show(): string {
        return (
            `
            Imię: ${this.name},
            Nazwisko: ${this.surname},
            Email: ${this.email},
            Data utworzenia: ${this.updatedDate},
            ID:${this.uuid}
            `
        )
    }

    update(key: availableKeys, value: string): void {
        Validator.isEmptyString(value)
        if (key === 'email') {
            Validator.isWrongEmail(value)
        }
        this[key] = value
    }
}