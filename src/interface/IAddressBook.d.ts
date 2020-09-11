import { IContact } from "./IContact";
import { IGroupContact } from "./IGroupContact";


export interface IAddressBook {
    listOfContacts: Array<IContact>;
    listOfGroups: Array<IGroupContact>;
    addContacts(...arrayOfContacts: Array<IContact>): void;
    addGroups(groupContact: IGroupContact): void;
    searchContactFromPhrase(phrase: string): Array<IContact>;
}