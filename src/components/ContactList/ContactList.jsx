import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <ul>
      {filterContacts().map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
