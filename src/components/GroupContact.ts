import {
    v4 as uuidv4
} from 'uuid';
import { Validator } from './Validator';
import { IContact } from '../interface/IContact';
import { IGroupContact } from '../interface/IGroupContact';

export class GroupContact implements IGroupContact {
    uuid: string;
    name: string;
    contacts: Array<IContact>

    constructor(nameGroup: string) {
        Validator.isEmptyString(nameGroup);
        this.uuid = uuidv4();
        this.name = nameGroup;
        this.contacts = []
    }


    addContacts(...arrayOfContacts: Array<IContact>): void {
        arrayOfContacts.forEach(contact => {
            const doesNotExistInContacts = !this.contacts.find(contactFind => contactFind.uuid === contact.uuid)
            if (doesNotExistInContacts) {
                this.contacts.push(contact)
            }
        })
    }

    removeContacts(...arrayOfContacts: Array<IContact>): void {
        arrayOfContacts.forEach(contact => {
            if (this.contacts.find(contactFind => contactFind.uuid === contact.uuid)) {
                this.contacts = this.contacts.filter(contactRemove => contactRemove.uuid !== contact.uuid)
            }
        })
    }

    changeNameGroup(nameGroup: string): void {
        Validator.isEmptyString(nameGroup);
        this.name = nameGroup;
    }
}