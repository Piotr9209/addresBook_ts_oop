import { GroupContact } from './GroupContact';
import { Contact } from '../Contact/Contact';

describe('group contact should', () => {
    const groupContact = new GroupContact('friends');

    test('group contact - object containing', () => {
        expect(groupContact).toEqual(expect.objectContaining({ name: 'friends' }));
    })

    test('change name group', () => {
        groupContact.changeNameGroup('works');
        expect(groupContact.name).toEqual('works');
    })

    test('group contact update name - test object containing and expected {name: "works"}', () => {
        expect(groupContact).toEqual(expect.objectContaining({ name: 'works' }));
    })
});

describe('method add contacts in group contact should', () => {
    const groupContact = new GroupContact('friends');
    const contact = new Contact('jan', 'kowalski', 'jk@gmail.com');
    const contact2 = new Contact('darek', 'darkowski', 'dd@gmail.com');

    test('add contact to list of groups contact and expect the length of array 1', () => {
        groupContact.addContacts(contact);
        expect(groupContact.contacts).toHaveLength(1);
        expect(groupContact.contacts[0]).toEqual(contact);
    });
    test('test dodania 2 razy tego samego kontaktu. oczekuje dlugosci tablicy jako 1 i jednego kontaktu', () => {
        groupContact.addContacts(contact, contact);
        expect(groupContact.contacts).toHaveLength(1);
        expect(groupContact.contacts[0]).toEqual(contact);
    });

    test('adds 2 new Contact to list of group contact and expect the length of array 2', () => {
        groupContact.addContacts(contact, contact2);
        expect(groupContact.contacts).toHaveLength(2);
        expect(groupContact.contacts[0]).toEqual(contact);
        expect(groupContact.contacts[1]).toEqual(contact2);
    });
});

describe('method to removing contacts from group should: ', () => {
    const groupContact = new GroupContact('friends');
    const contact = new Contact('jan', 'kowalski', 'jk@gmail.com');
    groupContact.addContacts(contact);


    const groupWorks = new GroupContact('works');
    const worksContact = new Contact('piotr', 'darkowski', 'pd@gmail.com')
    const worksContact2 = new Contact('piotr', 'jakubowski', 'pj@gmail.com')
    groupWorks.addContacts(worksContact, worksContact2);

    test('removing contact from group', () => {
        expect(groupContact.contacts).toHaveLength(1);
        groupContact.removeContacts(contact);
        expect(groupContact.contacts).toHaveLength(0);
    });

    test('added 2 contacts to array and next remove one contact in array - exptected if add contacts: array 2 legnth, if remove contact: array 0 length', () => {
        expect(groupWorks.contacts).toHaveLength(2);
        expect(groupWorks.contacts[1]).toEqual(worksContact2);
        groupWorks.removeContacts(worksContact, worksContact2);
        expect(groupWorks.contacts).toHaveLength(0);

    })
});


describe('methods to adding and remove contacts should handle error with proper message', () => {
    const groupContact = new GroupContact('friends');
    const contact = new Contact('jan', 'kowalski', 'jk@gmail.com');
    const contact2 = new Contact('darek', 'darkowski', 'dd@gmail.com');

    test('method addContacts: should throw error with correct message when there is no arguments', () => {
        expect(() => { expect(groupContact.addContacts()) }).toThrowError(`add minimum 1 contact`)
    });

    test('method removeContacts: return error if there will not argument - expected error', () => {
        expect(() => { expect(groupContact.removeContacts()) }).toThrowError(`add minimum 1 contact`)
    });

    test('addContacts to list of Contacts and delete contact that is not in array - expected error', () => {
        groupContact.addContacts(contact);
        expect(() => expect(groupContact.removeContacts(contact2))).toThrowError('contact does not exist to list contacts');
    })
});


// scenario:
// stworz kontakt mama tata brat ICONTAT
//DODAJ KONTAKTY do addresboka IADRESBOOK
// stworz grupe rodzina IGROUPCONTACT
//dodaj grupe rodzina do adresbooka
//w obrebie adresbooka dodaj tata,mama,brat do rodzina
//zmien nazwe na super mama, zlybrat
//zmien nazwe grupy superrodzina
//usun tate z grupy rodzina
// dodaj mama tata brat do grupy rodzina
