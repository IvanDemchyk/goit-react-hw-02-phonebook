import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div>
      <span>
        {name} : {number}
      </span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
