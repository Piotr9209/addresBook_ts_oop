import { IGroupContact } from '../../interface/IGroupContact';
import { IContact } from '../../interface/IContact';
import { IAddressBook } from '../../interface/IAddressBook';
import { availableKeysContact } from '../../type/sharedTypes';
import { Validator } from '../Validator';
import { GroupContact } from '../GroupContact/GroupContact';



export class AddressBook implements IAddressBook {
    listOfContacts: Array<IContact>;
    listOfGroups: Array<IGroupContact>
    constructor() {
        this.listOfContacts = [];
        this.listOfGroups = [];
    }

    addContacts(...arrayOfContacts: Array<IContact>): never | void {
        if (arrayOfContacts.length === 0) throw new Error('must be the 1 contact minimum as args');
        arrayOfContacts.forEach(contact => {
            const doesNotExistInContacts = this.listOfContacts.find(contactFind => contactFind.uuid === contact.uuid)
            if (doesNotExistInContacts) {
                throw new Error('contact is in array')
            } else {
                this.listOfContacts.push(contact);
            }
        })
    }

    addGroups(groupContact: IGroupContact): never | void {
        const doesNotExistInGroupContact = this.listOfGroups.find(group => group.uuid === groupContact.uuid)
        if (doesNotExistInGroupContact) {
            throw new Error('group contact is in array')
        } else {
            this.listOfGroups.push(groupContact)
        }
    }

    addContactToGroup(contact: IContact, groupContact: IGroupContact): void | never {
        const isIncludeGroupContactToListOfGroups = this.listOfGroups.find(group => group.uuid === groupContact.uuid)
        if (isIncludeGroupContactToListOfGroups) { throw new Error('is wrong contact') }
        const isIncludeContactToListContactsInGroupContact = groupContact.contacts.find(contactFind => contactFind.uuid === contact.uuid);
        if (isIncludeContactToListContactsInGroupContact) { throw new Error('contact is in group') }
        groupContact.contacts.push(contact);
    }

    searchContactFromPhrase(phrase: string): string | Array<IContact> {
        if (phrase.length < 4) return 'write minimum 3 characters'
        return this.listOfContacts.filter(contact => {
            return Object.values(contact).join('').toLowerCase().match(new RegExp(phrase.toLowerCase(), "g"));
        })
    }

    removeContacts(...arrayOfContacts: Array<IContact>): never | void | any {
        if (arrayOfContacts.length === 0) throw new Error('must be the 1 contact minimum as args');
        arrayOfContacts.forEach(contact => {
            const indexContactInListContacts = this.listOfContacts.findIndex(contactIndex => contactIndex.uuid === contact.uuid);
            if (indexContactInListContacts === -1) throw new Error('contact does not exist to list contacts')
            this.listOfContacts.splice(indexContactInListContacts, 1);
            this.listOfGroups.forEach(contactGroup => contactGroup.contacts.splice(indexContactInListContacts, 1))
        })
    }

    removeGroups(groupContact: IGroupContact): never | void {
        const indxGroupContact = this.listOfGroups.findIndex(groupIndex => groupIndex.uuid === groupContact.uuid);
        if (indxGroupContact === -1) throw new Error('group contact does not exist to list group contacts')
        this.listOfGroups.splice(indxGroupContact, 1);
    }

    updateContact(contact: IContact, key: availableKeysContact, value: string): never | void {
        Validator.isEmptyString(value);
        const isFindContactIndex = this.listOfContacts.findIndex(contactFind => contactFind.uuid === contact.uuid);
        if (isFindContactIndex === -1) throw new Error('contact does not exist to list of contacts');
        if (key === "name") {
            this.listOfContacts[isFindContactIndex].name = value;
        } else if (key === 'surname') {
            this.listOfContacts[isFindContactIndex].surname = value;
        } else {
            Validator.isWrongEmail(value);
            this.listOfContacts[isFindContactIndex].email = value;
        }
    }

    updateNameGroup(groupContact: IGroupContact, value: string): never | void {
        Validator.isEmptyString(value);
        const isFindGroupContactIndex = this.listOfGroups.findIndex(groupIndex => groupIndex.uuid === groupContact.uuid);
        if (isFindGroupContactIndex === -1) throw new Error('group contact does not exist to list of group contacts');
        this.listOfGroups[isFindGroupContactIndex].name = value;
    }

}