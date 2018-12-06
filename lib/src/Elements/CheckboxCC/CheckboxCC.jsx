import React from 'react';
import PropTypes from 'prop-types';

const CheckboxCC = ({id, checked, label, handleCheckedItem}) => (
<div  
    aria-checked={checked} 
    id={id}
    onClick={handleCheckedItem}
    role="checkbox"
    tabIndex="-1"
  >
    <label>{label}</label>
  </div>
);

CheckboxCC.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleCheckedItem: PropTypes.func.isRequired
};

export default CheckboxCC;
