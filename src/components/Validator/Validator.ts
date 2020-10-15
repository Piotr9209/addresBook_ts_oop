export class Validator {
    //1 nazwa: throw error on empty string
    //2 nazwa: throw error on empty email
    static isEmptyString(stringLikeValue: string): void | never {
        if (stringLikeValue.length === 0) throw new Error('params must be the minimum 1 characters')
    }
    //nazwa is/has/will/do ect/etc sugeruje zwracanie true/false (boolean). 
    static isWrongEmail(email: string): void | never {
        if (email.length === 0) throw new Error('write minimum 1 characters');
        const re: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) throw new Error('Email must be a letter and must contain between 3-25 characters, and must have special characters "@"')
    };
};
