import { Contact } from './Contact';


// Contact
// - works properly when
// -- contains name, surname and email
// -- contains date of creation - obj date
// -- name, surname, and email can be modified
// -- property modification updates date of modification - obj date modifiaction
// -- can get all information of contact in string show()

// - properly handles errors
// -- all input data should be not empty string
// -- input email should be an email



describe('Contact should', () => {
    const contact = new Contact('Jan', 'Kowalski', 'JK@gmail.com');
    test('test object contact containing', () => {
        expect(contact).toEqual(expect.objectContaining({
            name: "Jan",
            surname: "Kowalski",
            email: "JK@gmail.com",
        }))
    });

    test('update name and show new name', () => {
        contact.update('name', 'Janek');
        expect(contact.name).toEqual('Janek');
    });
    test('update surname and show new surname', () => {
        contact.update('surname', 'Kowalczyk');
        expect(contact.surname).toEqual('Kowalczyk');

    });
    test('update email and show new email', () => {
        contact.update('email', 'Janek.Kowalczyk@gmail.com');
        expect(contact.email).toEqual('Janek.Kowalczyk@gmail.com');
    });


    test('update date in contact - test object containing, expected: name: Janek, surname: Kowalczyk, email: Janek.Kowalczyk@gmail.com', () => {
        expect(contact).toEqual(expect.objectContaining({
            name: "Janek",
            surname: "Kowalczyk",
            email: "Janek.Kowalczyk@gmail.com",
        }))
    });
});

describe('Contact should throw Error:', () => {
    test('all input data should be not empty string', () => {
        expect(() => expect(new Contact('', 'dar', 'dar@gmail.com'))).toThrowError('params must be the minimum 1 characters');
        expect(() => expect(new Contact('dar', '', 'dar@gmail.com'))).toThrowError('params must be the minimum 1 characters');
    });

    test('input email should be an email', () => {
        expect(() => expect(new Contact('dar', 'jar', ''))).toThrowError('write minimum 1 characters');
    });

    test('input email should be an email', () => {
        expect(() => expect(new Contact('dar', 'dar', 'dar.com'))).toThrowError('Email must be a letter and must contain between 3-25 characters, and must have special characters "@"');
    })

    test('in method update: all input data should be not empty string', () => {
        const contact = new Contact('darek', 'darek', 'darek@gmail.com');
        expect(() => expect(contact.update('name', ''))).toThrowError('params must be the minimum 1 characters');
        expect(() => expect(contact.update('surname', ''))).toThrowError('params must be the minimum 1 characters');
    });

    test('in method update: input email should be an email', () => {
        const contact = new Contact('darek', 'darek', 'dar@gmail.com');
        expect(() => expect(contact.update('email', ''))).toThrowError('params must be the minimum 1 characters');
    });

    test('in method update: input email shoud be an email', () => {
        const contact = new Contact('darek', 'darek', 'dar@gmail.com');
        expect(() => expect(contact.update('email', 'dargmail.com'))).toThrowError('Email must be a letter and must contain between 3-25 characters, and must have special characters "@"');
    })
});
