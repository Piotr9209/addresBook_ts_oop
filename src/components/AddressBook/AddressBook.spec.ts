import { AddressBook } from './AddressBook'
import { GroupContact } from '../GroupContact/GroupContact'
import { Contact } from '../Contact/Contact';

describe('Address Book should:', () => {


    test('add contacts to list of contacts', () => {
        const myAddressBook = new AddressBook();
        const contact = new Contact('piotr', 'jakubowski', 'pj@gmail.com')
        const contact2 = new Contact('jarek', 'badura', 'jb@gmail.com');
        myAddressBook.addContacts(contact, contact2)

        expect(myAddressBook.listOfContacts[0]).toEqual(contact);
        expect(myAddressBook.listOfContacts).toHaveLength(2);
    });

    const myAddressBook2 = new AddressBook();
    const myGroupWorks = new GroupContact('works');
    myAddressBook2.addGroups(myGroupWorks);
    test('add groups to list of groups', () => {
        expect(myAddressBook2.listOfGroups).toHaveLength(1);
        expect(myAddressBook2.listOfGroups[0]).toEqual(myGroupWorks);
    });

    const myAddressBook3 = new AddressBook();
    const groupFriends = new GroupContact('friends');
    const contactFriends = new Contact('friends', 'darek', 'fd@gmail.com');
    const contactFriends2 = new Contact('friends', 'darek', 'fd@gmail.com');

    test('add contact to group', () => {
        myAddressBook3.addContactToGroup(contactFriends, groupFriends);

        expect(groupFriends.contacts).toHaveLength(1);
        expect(groupFriends.contacts[0]).toEqual(contactFriends);
        myAddressBook3.addContactToGroup(contactFriends2, groupFriends);
        expect(groupFriends.contacts).toHaveLength(2);
        expect(groupFriends.contacts[1]).toEqual(contactFriends2);

    });

    const myAddressBook4 = new AddressBook();
    const contactBook = new Contact('Piotr', 'Kowal', 'PKowal@gmail.com');
    myAddressBook4.addContacts(contactBook);
    test('search contact from phrase', () => {
        expect(myAddressBook4.listOfContacts[0].name).toEqual('Piotr');
        expect(myAddressBook4.listOfContacts[0].email).toEqual('PKowal@gmail.com');
        expect(myAddressBook4.listOfContacts[0].name).toHaveLength(5);
    });

    const myAddressBook5 = new AddressBook();
    const contactToRemove = new Contact('darek', 'michalczewski', 'dm@gmail.com');
    const contactToRemove2 = new Contact('jarek', 'jarkowski', 'jj@gmail.com');
    myAddressBook5.addContacts(contactToRemove, contactToRemove2);
    test('remove contact from list of contact', () => {
        expect(myAddressBook5.listOfContacts).toHaveLength(2);
        expect(myAddressBook5.listOfContacts[0]).toEqual(contactToRemove);
        myAddressBook5.removeContacts(contactToRemove, contactToRemove2);
        expect(myAddressBook5.listOfContacts).toHaveLength(0);
    });

    const myAddressBook6 = new AddressBook();
    const groupFamily = new GroupContact('rodzina');
    const groupGame = new GroupContact('player');
    myAddressBook6.addGroups(groupFamily);
    myAddressBook6.addGroups(groupGame);
    test('remove group contact from list of group contact', () => {
        expect(myAddressBook6.listOfGroups).toHaveLength(2);
        expect(myAddressBook6.listOfGroups[1]).toEqual(groupGame);
        myAddressBook6.removeGroup(groupFamily);
        expect(myAddressBook6.listOfGroups).toHaveLength(1);
        expect(myAddressBook6.listOfGroups[0]).toEqual(groupGame);
        myAddressBook6.removeGroup(groupGame);
        expect(myAddressBook6.listOfGroups).toHaveLength(0);
    });

    const myAddressBook7 = new AddressBook();
    const contactToUpdate = new Contact('paweł', 'jackowski', 'pjg@gmail.com');
    const groupFacebook = new GroupContact('facebook');
    myAddressBook7.addContacts(contactToUpdate);
    myAddressBook7.addContactToGroup(contactToUpdate, groupFacebook);

    test('method updateContact, expected changed all args in list of contacts and list of contacts in group', () => {
        expect(myAddressBook7.listOfContacts[0].name).toEqual('paweł');
        expect(myAddressBook7.listOfContacts[0].surname).toEqual('jackowski');
        expect(groupFacebook.contacts[0].name).toEqual('paweł');
        expect(groupFacebook.contacts[0].surname).toEqual('jackowski');

        myAddressBook7.updateContact(contactToUpdate, 'name', 'Rafał');
        myAddressBook7.updateContact(contactToUpdate, "surname", 'Maslak');
        myAddressBook7.updateContact(contactToUpdate, 'email', 'RM@gmail.com');
        expect(myAddressBook7.listOfContacts[0].name).toEqual('Rafał');
        expect(myAddressBook7.listOfContacts[0].surname).toEqual('Maslak');
        expect(myAddressBook7.listOfContacts[0].email).toEqual('RM@gmail.com');
        expect(groupFacebook.contacts[0].name).toEqual('Rafał');
        expect(groupFacebook.contacts[0].surname).toEqual('Maslak');
        expect(groupFacebook.contacts[0].email).toEqual('RM@gmail.com');
    });

    const myAddressBook8 = new AddressBook();
    const groupHomework = new GroupContact('homeworkers');
    const contactHomeworkers = new Contact('Beata', 'Szachniewska', 'BSZ@gmail.com');
    myAddressBook8.addGroups(groupHomework);
    myAddressBook8.addContacts(contactHomeworkers);
    myAddressBook8.addContactToGroup(contactHomeworkers, groupHomework);
    test('change name group in updateNameGroup', () => {
        expect(myAddressBook8.listOfGroups[0].name).toEqual('homeworkers');
        expect(groupHomework.name).toEqual('homeworkers');
        myAddressBook8.updateNameGroup(groupHomework, 'workersInHome');
        expect(myAddressBook8.listOfGroups[0].name).toEqual('workersInHome');
        expect(groupHomework.name).toEqual('workersInHome');
    });
});

describe('Address Book should return:', () => {
    const myAddressBook = new AddressBook();
    const myContact = new Contact('marek', 'filipek', 'mf@gmail.com');
    myAddressBook.addContacts(myContact);
    test('searchContactFromPhrase, args receives phrase which has less than 3 characters, expected return "must be the 1 contact minimum as args"', () => {
        expect(myAddressBook.searchContactFromPhrase('mar')).toEqual('write minimum 3 characters');
    })
});

describe('Address Book should throw error:', () => {
    const myAddressBook = new AddressBook();
    test('add 0 args in method addContacts, expected Error ("must be the 1 contact minimum as args")', () => {
        expect(() => { expect(myAddressBook.addContacts()) }).toThrowError('must be the 1 contact minimum as args');
    });

    const myAddressBook2 = new AddressBook();
    const myContact = new Contact('piotr', 'darkowski', 'pdarkowski@gmail.com');
    test('add two the same contact as arg in method addContacts, expected Error ("contact is in array")', () => {
        myAddressBook2.addContacts(myContact);
        expect(() => { expect(myAddressBook2.addContacts(myContact)) }).toThrowError('contact is in array');
    });

    const myAddressBook3 = new AddressBook();
    const groupFriends = new GroupContact('friends');
    test('add two the same groupContact as arg in method addGroup, expected Error ("group contact is in array")', () => {
        myAddressBook3.addGroups(groupFriends);
        expect(() => { expect(myAddressBook3.addGroups(groupFriends)) }).toThrowError('group contact is in array');
    });

    const myAddressBook4 = new AddressBook();
    const groupWorks = new GroupContact('works');
    const myContact2 = new Contact('Karol', 'Jagielski', 'KarolJagielski@gmail.com');

    myAddressBook4.addContactToGroup(myContact2, groupWorks);
    test('contact include to list of contacts in group contact, expected Error ("contact is in group")', () => {
        expect(() => { expect(myAddressBook4.addContactToGroup(myContact2, groupWorks)) }).toThrowError('contact is in group')
    });

    const myAddressBook5 = new AddressBook();
    const myContact3 = new Contact('janek', 'karo', 'janekkaro@gmail.com');
    const myContact4 = new Contact('janek', 'karo', 'janekkaro@gmail.com');

    myAddressBook5.addContacts(myContact3);
    test('no arguments in method removeContacts, expected Error "must be the 1 contact minimum as arg"', () => {
        expect(() => { expect(myAddressBook5.removeContacts()) }).toThrowError('must be the 1 contact minimum as arg');
    })

    test('argument not include to array in method removeContacts, expected Error ("contact does not exist to list contacts")', () => {
        expect(() => { expect(myAddressBook5.removeContacts(myContact4)) }).toThrowError('contact does not exist to list contacts');
    })

    const myAddressBook6 = new AddressBook();
    const myGroupIT = new GroupContact('it');
    const myGroupCar = new GroupContact('car');
    myAddressBook6.addGroups(myGroupIT);

    test('argument not include to array in method removeGroup, expected Error ("group contact does not exist to list group contacts")', () => {
        expect(() => { expect(myAddressBook6.removeGroup(myGroupCar)) }).toThrowError('group contact does not exist to list group contacts');
    })

    const myAddressBook7 = new AddressBook()
    const myContact5 = new Contact('moto', 'gp', 'mgp@gmail.com');
    const myContact6 = new Contact('moto', 'gp', 'mgp@gmail.com');
    myAddressBook7.addContacts(myContact5);
    test('argument not include to array in method updateContact, expected Error ("contact does not exist to list of contacts")', () => {
        expect(() => { expect(myAddressBook7.updateContact(myContact6, 'name', 'jarosław')) }).toThrowError('contact does not exist to list of contacts');
    })

    const myAddressBook8 = new AddressBook();
    const myGroupMoto = new GroupContact('motoGP');
    const myGroupGarden = new GroupContact('garden');

    myAddressBook8.addGroups(myGroupMoto);

    test('argument not include to array in method updateNameGroup, expected Error("group contact does not exist to list of group contacts")', () => {
        expect(() => { expect(myAddressBook8.updateNameGroup(myGroupGarden, 'ogród')) }).toThrowError('group contact does not exist to list of group contacts');
    })

});




