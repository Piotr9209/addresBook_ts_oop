import {
    v4 as uuidv4
} from 'uuid';
import { Validator } from '../Validator';
import { IContact } from '../../interface/IContact';
import { IGroupContact } from '../../interface/IGroupContact';
// import { Utils } from './Utilis';


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
    changeNameGroup(nameGroup: string): void {
        Validator.isEmptyString(nameGroup);
        this.name = nameGroup;
    }

    addContacts(...arrayOfContacts: Array<IContact>): never | void {
        if (arrayOfContacts.length === 0) throw new Error(`add minimum 1 contact`)
        arrayOfContacts.forEach(contact => {
            const doesNotExistInContacts = !this.contacts.find(contactFind => contactFind.uuid === contact.uuid);
            if (doesNotExistInContacts) {
                this.contacts.push(contact)
            }
        })
    }

    removeContacts(...arrayOfContacts: Array<IContact>): never | void {
        // if(arrayOfContacts.length===0) throw new Error ('add minimum 1 contact to remove contact')
        // arrayOfContacts.forEach(contact => {
        //     if (this.contacts.find(contactFind => contactFind.uuid === contact.uuid)) {
        //         this.contacts = this.contacts.filter(contactRemove => contactRemove.uuid !== contact.uuid)
        //     }
        // })
        //ALTERNATIVE:

        if (arrayOfContacts.length === 0) throw new Error('add minimum 1 contact to remove contact')
        arrayOfContacts.forEach(contact => {
            const indxContact = this.contacts.findIndex(contactIndex => contactIndex.uuid === contact.uuid)
            if (indxContact === -1) {
                throw new Error('contact does not exist to list contacts')
            }
            this.contacts.splice(indxContact, 1);
        })


    }


}