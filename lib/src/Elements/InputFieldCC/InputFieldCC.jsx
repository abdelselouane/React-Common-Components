import React from 'react';
import PropTypes from 'prop-types';

const InputFieldCC = ({ field, label, error }) => (
  <div className={`text-input-container ${error.flag && 'error'}`}>
    <input
      {...field}
    />
    { label && <label htmlFor={field.id}>{label.text}</label> }
    { error.flag && <span style={{ color:"#ed1c24" }}>{error.msg}</span> }
  </div>
);

InputFieldCC.propTypes = {
  error: PropTypes.shape({
    flag: PropTypes.boolean,
    msg: PropTypes.string
  }),
  field: PropTypes.object.isRequired,
  label: PropTypes.shape({
    text: PropTypes.string
  })
};

export default InputFieldCC;
