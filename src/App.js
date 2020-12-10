import './App.css';
import { Component } from 'react';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts.filter(contact => contact.id !== contactId)],
    }));
  };

  changeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  checkingContactName = verificationName => {
    const { contacts } = this.state;
    const normalizedName = verificationName.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  render() {
    const { filter } = this.state;

    const filterContacts = this.getFilterContacts();

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.addContact}
          checkingContactName={this.checkingContactName}
        />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
