import React from 'react';
import PropTypes from 'prop-types';

const CheckboxTableCC = ({id, checked, label, handleCheckedItem}) => {

  return (
    <div  
      aria-checked={checked.check} 
      id={id}
      onClick={() => handleCheckedItem(id)}
      role="checkbox"
      tabIndex="-1"
    >
      <label>{label}</label>
    </div>
  );
  }

CheckboxTableCC.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.shape({
    key: PropTypes.string.isRequired,
    check: PropTypes.bool.isRequired
  })
};

export default CheckboxTableCC;
