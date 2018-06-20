import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: 700;
  font-size: 1.3em;
  line-height: 35px;
`;

const CheckList = styled.div`
  margin-top: 15px;
`;

const Check = styled.div`
  margin-bottom: 15px;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;


const Checkbox = ({
  name, label, onChange, style, options,
}) => (
  <div>
    <Label htmlFor={name}>
      {label}
    </Label>
    <CheckList>
      {options.map(option => (
        <Check>
          <CheckBox
            type="checkbox"
            name={option}
            onChange={event => onChange(name, event)}
            style={style}
          />
          {option}
        </Check>
      ))}
    </CheckList>
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
