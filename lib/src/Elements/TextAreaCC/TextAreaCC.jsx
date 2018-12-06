import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ field, label, content, error, textLength }) => (
  <div className={`text-input-container cc-text-input-container ${error.flag && 'error'}`}>
    <textarea {...field} />
    { label && <label htmlFor={field.id}>{label.text}</label> }
    { error.flag && <span style={{ color:"#ed1c24" }}>{error.msg}</span> }
    { textLength && <p className="textarea_counter cc-textarea_counter"><span>{textLength}</span> Characters Remaining</p>}
  </div>
);

TextArea.propTypes = {
  content: PropTypes.string,
  error: PropTypes.shape({
    flag: PropTypes.boolean,
    msg: PropTypes.string
  }),
  field: PropTypes.object.isRequired,
  label: PropTypes.shape({
    text: PropTypes.string
  }),
  textLength: PropTypes.number,
};

export default TextArea;