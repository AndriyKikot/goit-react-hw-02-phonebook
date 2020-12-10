import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const duplicateName = this.props.checkingContactName(name);

    if (duplicateName) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = { id: uuidv4(), name, number };
      this.props.onAddContact(newContact);
    }

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            required
          />
        </label>

        <label htmlFor="">
          Number
          <input
            type="tel"
            value={number}
            name="number"
            onChange={this.handleChange}
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
