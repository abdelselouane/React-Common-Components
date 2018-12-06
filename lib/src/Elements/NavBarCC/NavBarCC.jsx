import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NavBarCC = ({
  style,
  info,
  search,
  actions
}) => {

  return (
    <div className="header cc-header" style={style}>
      <div className="header-logo cc-header-logo">
        <i className="icon_homedepot cc-icon-home" />
      </div>
      <div className="header-info cc-header-info">
        { info.product.text && <label className="product-info cc-product-info" >{info.product.text}</label>}
        { info.user.text && <label className="user-info cc-user-info">{info.user.text}</label>} 
      </div>
      <div className="header-search cc-header-search">
        { search.show && <input {...search.input}/>}
        { search.show && <i className="icon_search cc-icon-search"></i>}
      </div>
      <div className="header-actions cc-header-actions">
        { 
          actions.map( (action, index) => (
            <Link 
              key={`${index}-link`}
              to={action.path}
            >
              <div 
                className={ `${action.text.toLowerCase() === window.location.pathname.split("/").pop() && 'active'} cc-active`} 
                key={`${index}-item`}
              >
                <i className={action.className} />{action.text}
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

NavBarCC.propTypes = {
  style: PropTypes.object,
  info: PropTypes.shape({
    product: PropTypes.shape({
      text: PropTypes.string,
    }),
    user: PropTypes.shape({
      text: PropTypes.string,
    })
  }),
  search: PropTypes.shape({
    show: PropTypes.boolean,
    input: PropTypes.object.isRequired
  }),
  actions: PropTypes.array
};

export default NavBarCC;
