import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BreadcrumbCC = ({ breadcrumbs }) => {
  return (
    <div className="breadcrumb-nav cc-breadcrumb-nav">
      {
        breadcrumbs.map((breadcrumb, index) => (
          <span key={`breadcrumb-${index}`} className={`breadcrumb ${breadcrumb.text === "back" && "back"} ${index === breadcrumbs.length-1 && "active"}`}>
            <Link to={breadcrumb.path}>{breadcrumb.text}</Link>
          </span>
        ))
      }
    </div>
  );
}

BreadcrumbCC.propTypes = {
  breadcrumbs: PropTypes.array.isRequired
}


export default BreadcrumbCC;

