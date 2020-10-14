import { IContact } from "./IContact";
import { IGroupContact } from "./IGroupContact";
import { availableKeysGroup, availableKeysContact } from "../type/sharedTypes";


export interface IAddressBook {
    listOfContacts: Array<IContact>;
    listOfGroups: Array<IGroupContact>;
    addContacts(...arrayOfContacts: Array<IContact>): never | void;
    addGroups(groupContact: IGroupContact): void;
    addContactToGroup(contact: IContact, groupContact: IGroupContact): void | never;
    searchContactFromPhrase(phrase: string): string | Array<IContact>;
    removeContacts(...arrayOfContacts: Array<IContact>): never | void;
    removeGroup(groupContact: IGroupContact): never | void;
    updateContact(contact: IContact, key: availableKeysContact, value: string): never | void
    updateNameGroup(groupContact: IGroupContact, value: string): never | void
}