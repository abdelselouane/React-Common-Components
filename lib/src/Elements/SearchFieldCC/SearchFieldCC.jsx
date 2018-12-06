import React from 'react';
import PropTypes from 'prop-types';

const SearchFieldCC = ({
  input,
  action,
  actionText,
  error
}) => {

  const spanStyle = {
    color: '#FF7849',
    fontSize: '20px',
    fontWeight: 500,
    float: 'right',
    padding: '5px 10px',
    position: 'relative',
    cursor: 'pointer',
    marginTop: '-40px',
    textDecoration: 'none'
  };

  return (
    <div className={`text-input-container ${error.flag && "error"}`}>
      <input
        {...input}
      />
      <a style={spanStyle} {...action} >{
        actionText.icon ? actionText.icon : actionText.text
      }</a>
      {
        error.flag && <span style={{color:"#ed1c24"}}>{`${error.msg}`}</span>
      }
    </div>
  );
}

SearchFieldCC.propTypes = {
  input: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  action: PropTypes.shape({
    onClick: PropTypes.func
  }),
  actionText: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.object
  }),
  error: PropTypes.shape({
    flag: PropTypes.bool,
    msg: PropTypes.string
  })
};

export default SearchFieldCC;
