import { availableKeys } from "../type/sharedTypes";
import { withUuid } from "./withUuid";


// moment()

export interface IContact extends withUuid {
    name: string;
    surname: string;
    email: string
    createDate: string;
    modificationDate(): void;
    show(): string;
    update(key: availableKeys, value: string): void;
}