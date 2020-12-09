import './App.css';
import { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  // handleChange = event => {
  //   const { name, value } = event.currentTarget;

  //   this.setState({ [name]: value, });
  // };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.addContact(this.state.name, this.state.number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  // formSubmitHundler = data => {
  //   console.log(data);
  // }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { name, number, filter } = this.state;

    const filterContacts = this.getFilterContacts();

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="">
            Number
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>

          <h2>Contacts</h2>
          <label htmlFor="">
            Find contact by name
            <input
              type="text"
              value={filter}
              name="filter"
              onChange={this.changeFilter}
            />
            <div className="">
              {filterContacts.map(contact => contact.name)}
            </div>
          </label>

          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>

                <button onClick={() => this.deleteContact(contact.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
