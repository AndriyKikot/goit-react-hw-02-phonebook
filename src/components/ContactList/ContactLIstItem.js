// import PropTypes from 'prop-types';
// import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id}>
      <p>
        {name}: {number}
      </p>

      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;