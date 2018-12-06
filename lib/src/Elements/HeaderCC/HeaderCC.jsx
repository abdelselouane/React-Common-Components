import React from 'react';
import PropTypes from 'prop-types';

const HeaderCC = (props) => {
  return (
    <div className="row start-md">
      <div className="col-md-12">
        <h1 className="border">{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
    </div>
  )
}

HeaderCC.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

HeaderCC.deafultProps = {
  title: 'Title',
  subTitle: 'Sub Title'
};

export default HeaderCC;
