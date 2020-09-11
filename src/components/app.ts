// "1) Stwórz strukturę danych związaną z książką adresową.

// Obiekt 
// książka adresowa 
// Ma mieć: listę wszystkich kontaktów, listę grup kontaktów.
// Ma umożliwiać: można szukać kontaktu po frazie, można dodać kontakt do grupy

//     Obiekt charakteryzujący pojedyńczy kontak:
//     Ma mieć: Imie, Nazwisko, adres - emial, datę modyfikacji / utworzenia, uuid
// Ma umożliwiać: aktualizację datę modyfikacji, wyświetlać
// w odpowiednim formacie przy wywołaniu, pozwalac na modyfikację imienia, nazwiska oraz adresu email

// Obiekt charakteryzujący grupę kontaktów:
//     Ma mieć: listę kontaktów
// Ma umożliwiać: Można zmienić nazwę grupy, można dodać lub usunac kontakt z grupy "				



import { Contact } from './Contact';
import { GroupContact } from './GroupContact';
import { AddressBook } from './AddressBook';


const contact = new Contact('Piotr', "J", 'p.j@gmail.com')
const contact2 = new Contact('Jarek', 'Michalczewsk', 'JM@interia.pl')
const contact3 = new Contact('Darek', 'fdsfds', 'ewrw@interia.pl')
const contact4 = new Contact('jacenty', 'zbysiu', 'KarolJM@interia.pl')
const contact5 = new Contact('Marek', 'kowal', 'MAW@interia.pl')
const contact6 = new Contact('Mariusz', 'karnia', 'MKA@gmail.pl')


const groupFriends = new GroupContact('znajomi');
const groupFamily = new GroupContact('rodzina');
const groupWork = new GroupContact('praca');

groupFriends.addContacts(contact, contact2, contact3);
groupFamily.addContacts(contact3, contact4);
groupWork.addContacts(contact6, contact5)
groupFriends.removeContacts(contact2)
groupFriends.removeContacts(contact)


const addressBook = new AddressBook();
addressBook.addContacts(contact, contact2, contact3, contact4, contact5, contact6)
addressBook.addGroups(groupFriends)
addressBook.addGroups(groupFamily)
addressBook.addGroups(groupWork)