import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilter }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <div>
        <input type="text" name="filter" value={filter} onChange={onFilter} />
      </div>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
