import './App.css';
import { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = {
      id: uuidv4(),
      name: name,
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

    this.addContact(this.state.name);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  // formSubmitHundler = data => {
  //   console.log(data);
  // }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    // const { name } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>

          {/* <label htmlFor="">
            Number
            <input
              type="text"
              name="number"
              onChange={this.handleChange} />
          </label> */}
          <p>Contacts</p>
          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>
                <p>{contact.name}</p>
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
