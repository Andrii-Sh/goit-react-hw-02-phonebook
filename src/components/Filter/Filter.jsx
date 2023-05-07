// import PropTypes from 'prop-types';

export const Filter = ({ onChange, filter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};
