import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name, label, onChange, type, style,
}) => (
  <label htmlFor={name}>
    {label}
    <input
      type={type}
      name={name}
      onChange={onChange}
      style={style}
    />
  </label>
);

Input.defaultProps = {
  onChange: null,
  type: 'text',
  style: {},
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.object,
};

export default Input;
