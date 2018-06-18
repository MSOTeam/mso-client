import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({
  name, label, onChange, style, options,
}) => (
  <div style={{ paddingTop: 10 }}>
    <label htmlFor={name} style={{ fontWeight: 600, fontSize: 18 }}>
      {label}
    </label>
    {options.map(option => (
      <div>
        {option}
        <input
        type="checkbox"
        name={option}
        onChange={event => onChange(name, event)}
        style={style}
        />
      </div>
    ))}    
  </div>
);

Checkbox.defaultProps = {
  onChange: null,
  type: 'text',
  style: {},
  options: [],
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.array,
};

export default Checkbox;
