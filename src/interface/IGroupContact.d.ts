import { IUuid, IContact } from './IContact'
import { withUuid } from './withUuid';

export interface IGroupContact extends withUuid {
    name: string;
    contacts: Array<IContact>;
    addContacts(...arrayOfContacts: Array<IContact>): void;
    removeContacts(...arrayOfContacts: Array<IContact>): void;
    changeNameGroup(nameGroup: string): void; //changeGroupName
}