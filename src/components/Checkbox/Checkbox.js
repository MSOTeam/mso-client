import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-weight: 600;
  font-size: 1.3em;
  line-height: 35px;
`;

const CheckList = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  margin-top: 10px;
`;

const Check = styled.div`
  /* display: flex; */
  /* width: calc(100%/4); */
  margin-bottom: 15px;
  /* &:last-child {
    width: 100%;
  } */
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
          <input
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
