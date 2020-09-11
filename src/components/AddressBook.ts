import { IGroupContact } from '../interface/IGroupContact';
import { IContact } from '../interface/IContact';
import { IAddressBook } from '../interface/IAddressBook';




export class AddressBook implements IAddressBook {
    listOfContacts: Array<IContact>;
    listOfGroups: Array<IGroupContact>
    constructor() {
        this.listOfContacts = [];
        this.listOfGroups = [];
    }

    addContacts(...arrayOfContacts: Array<IContact>): void {
        arrayOfContacts.forEach(contact => {
            const doesNotExistInContacts = !this.listOfContacts.find(contactFind => contactFind.uuid === contact.uuid)
            if (doesNotExistInContacts) {
                this.listOfContacts.push(contact);
            }
        })
    }

    addGroups(groupContact: IGroupContact): void {
        const doesNotExistInGroupContact = !this.listOfGroups.find(group => group.uuid === groupContact.uuid)
        if (doesNotExistInGroupContact) {
            this.listOfGroups.push(groupContact)
        }
    }

    searchContactFromPhrase(phrase: string): Array<IContact> {
        if (phrase.length < 3 || typeof phrase !== "string") throw new Error('phrase must be the string and different from 0');
        return this.listOfContacts.filter(contact => {
            return Object.values(contact).join('').toLowerCase().match(new RegExp(phrase, "g"));
        })
    }
}