
import React from 'react';
import PropTypes from 'prop-types';

const BannerCC = ({ show, type, message, closeBanner }) => { 

    const styles = {
        visibility: !show ? 'hidden' : '',
    }

    return (
        <React.Fragment>
            <div className={`banner cc-banner ${type}`} style={styles} >
                <span className="message">{message}</span>
                <span className="close" onClick={closeBanner}></span>
            </div>
        </React.Fragment>
    );
}

BannerCC.PropTypes = {
    show: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    closeBanner: PropTypes.func.isRequired
}

export default BannerCC;