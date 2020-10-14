import { Validator } from './Validator';


describe('Validator should throw error:', () => {
    test('arguments is empty string, expected throw error ("params must be the minimum 1 characters")', () => {
        expect(() => expect(Validator.isEmptyString(''))).toThrowError('params must be the minimum 1 characters');
    });

    test('arguments is wrong address email, expected Error (`Email must be a letter and must contain between 3-25 characters, and must have special characters "@"`)', () => {
        expect(() => expect(Validator.isWrongEmail('dar@gma'))).toThrowError('Email must be a letter and must contain between 3-25 characters, and must have special characters "@"');
        expect(() => expect(Validator.isWrongEmail('dare@'))).toThrowError('Email must be a letter and must contain between 3-25 characters, and must have special characters "@"');
        expect(() => expect(Validator.isWrongEmail('kard.com'))).toThrowError('Email must be a letter and must contain between 3-25 characters, and must have special characters "@"');
    });
});