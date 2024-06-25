
import PropTypes from 'prop-types';

export default function Input({ value, onChange, name }) {
  return (
    <div>
      <label >{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
