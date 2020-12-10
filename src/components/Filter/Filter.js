import PropTypes from 'prop-types';
// import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact by name
      <input type="text" value={value} name="filter" onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
