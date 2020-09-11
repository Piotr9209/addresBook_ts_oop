import { availableKeys } from "../type/sharedTypes";
import { withUuid } from "./withUuid";




export interface IContact extends withUuid {
    name: string;
    surname: string;
    email: string
    updatedDate: string;
    updateDate(): string;
    show(): string;
    update(key: availableKeys, value: string): void;
}