// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Contact } from '../Contact/Contact';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const lisiItemtId = nanoid();
        return (
          <li key={lisiItemtId}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};
