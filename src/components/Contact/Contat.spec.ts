import { Contact } from './Contact';
import { Validator } from '../Validator'

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
    test('update date in contact - test object containing, exptected: name: Janek, surname: Kowalczyk, email: Janek.Kowalczyk@gmail.com', () => {
        expect(contact).toEqual(expect.objectContaining({
            name: "Janek",
            surname: "Kowalczyk",
            email: "Janek.Kowalczyk@gmail.com",
        }))
    });

});
