// import PropTypes from 'prop-types';
// import s from './ContactList.module.css';

import ContactListItem from './ContactLIstItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};
export default ContactList;
