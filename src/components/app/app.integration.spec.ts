import { Contact } from '../Contact/Contact';
import { GroupContact } from '../GroupContact/GroupContact';
import { AddressBook } from '../AddressBook/AddressBook';


describe('integration test of the application should ', () => {
    const mother = new Contact('mother', 'mother', 'mother@gmail.com');
    const father = new Contact('father', 'father', 'father@gmail.com');
    const brother = new Contact('brother', 'brother', 'brother@gmail.com');
    const addressBook = new AddressBook();
    test('add all contact to address book', () => {
        addressBook.addContacts(mother, father, brother);
        expect(addressBook.listOfContacts).toHaveLength(3);
        expect(addressBook.listOfContacts[1]).toEqual(father);
        expect(addressBook.listOfContacts[2]).toEqual(brother);
    });
    const family = new GroupContact('family');

    test('add group family to address book', () => {
        addressBook.addGroups(family);
        expect(addressBook.listOfGroups).toHaveLength(1);
        expect(addressBook.listOfGroups[0]).toEqual(family);
    });

    test('add: father, mother, brother to group family in class Address Book', () => {
        addressBook.addContactToGroup(mother, family);
        addressBook.addContactToGroup(father, family);
        addressBook.addContactToGroup(brother, family);

        expect(family.contacts).toHaveLength(3);
        expect(family.contacts[0]).toEqual(mother);
        expect(family.contacts[1]).toEqual(father);
        expect(addressBook.listOfGroups).toHaveLength(1);
    });

    test('change name mother to superMother', () => {
        addressBook.updateContact(mother, 'name', 'superMother');
        expect(mother.name).toEqual('superMother');
        expect(addressBook.listOfContacts[0]).toEqual(mother);
    });

    test('change name brother to angryBrother', () => {
        brother.update('name', 'angryBrother');
        expect(brother.name).toEqual('angryBrother');
        expect(addressBook.listOfContacts[2]).toEqual(brother);
    });

    test('change group family to super family', () => {
        addressBook.updateNameGroup(family, 'superFamily');
        expect(family.name).toEqual('superFamily');
        expect(addressBook.listOfGroups[0]).toEqual(family);
    });

    test('remove father from group family', () => {
        addressBook.removeContacts(father);
        expect(addressBook.listOfContacts).toHaveLength(2);
        expect(addressBook.listOfContacts[0]).toEqual(mother);
        expect(addressBook.listOfContacts[1]).toEqual(brother);
    });

    test('remove group family', () => {
        addressBook.removeGroup(family);
        expect(addressBook.listOfGroups).toHaveLength(0);
        expect(addressBook.listOfContacts).toHaveLength(2);
        expect(addressBook.listOfContacts[0]).toEqual(mother);
        expect(addressBook.listOfContacts[1]).toEqual(brother);
    })
});
