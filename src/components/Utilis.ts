export class Utils {

    static findByUuid<T>(list: Array<T>, elementWithUuid: T): void {
        list.find(element => element === elementWithUuid)
    }

    static findIndexByUuid<T>(list: Array<T>, elementWithUuid: T): void {
        list.findIndex(el => el === elementWithUuid)
    }
}