import React from 'react';
import PropTypes from 'prop-types';

const ModalCC = ({ id, show, toolBar, content, handleModalClose, actions, styles }) => {
    let typeColor='';

    switch(toolBar.type) {
        case 'success':
            typeColor = '#00AE4D';
        break;
        case 'error':
            typeColor = '#ED1C24';
        break;
        case 'warning':
            typeColor = '#FFC20E';
        break;
        case 'information':
            typeColor = '#286FAD';
        break;
    }

    const toolBarStyles = {
      marginBottom: 0,
      backgroundColor: toolBar.type && typeColor,
      padding: toolBar.type && "15px",
      color: toolBar.type !== '' ? toolBar.type === 'warning' ? '#555' : '#fff' : '',
      margin: toolBar.type && "-20px -20px 20px -20px",
      display: 'flex',
      flexDirection: 'row'
    }

    const iconClose = {
        top: 0,
        right: 0
    }

    const titelIcon = {
        marginLeft: 0,
        marginRight: '10px',
        fontSize: '30px'
    }

    return (
      <div className={`modal-bg ${show && 'show-modal'}`}>
        <div className="modal-flex-wrapper">
            <div className={`card modal cc-modal ${show && 'show-modal'}`} id={id} style={styles}>
                <div className="card-toolbar" style={toolBarStyles}>
                    <span className="card-title">
                        <h2>
                        {
                            toolBar.icon &&
                            <i className={toolBar.icon} style={titelIcon} 
                            ref={(el) => {
                                if (el) {
                                    if(toolBar.type === 'warning'){
                                        el.style.setProperty('color', '#555', 'important');
                                    } else {
                                        el.style.setProperty('color', '#fff', 'important');
                                    }
                                }
                              }}></i>
                        }
                        { toolBar.title }
                        </h2>
                    </span>
                    <i className="icon_close" onClick={handleModalClose} style={iconClose}
                    ref={(el) => {
                        if (el && toolBar.type) {
                            if(toolBar.type === 'warning'){
                                el.style.setProperty('color', '#555', 'important');
                            } else {
                                el.style.setProperty('color', '#fff', 'important');
                            }
                        }
                      }}></i>
                </div>
                <div className="card-content">
                    { content && content }
                </div>
                <div className="card-actions right">
                {
                    actions && (
                        actions.map( (action, index) => {
                            return (<button key={`btn-${index}`} id={action.id} className={`button ${action.className}`} onClick={action.onClick}>{action.text}</button>)
                        })
                    )
                }
                </div>
            </div>
        </div>
      </div>             
    );
}

ModalCC.prototype = {
    id: PropTypes.string.isRequired, 
    show: PropTypes.bool.isRequired, 
    toolBar: PropTypes.shape({
        title: PropTypes.string,
        type: PropTypes.string,
        icon: PropTypes.string
    }), 
    content: PropTypes.object, 
    handleModalClose: PropTypes.func.isRequired, 
    actions: PropTypes.shape({
        id: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        className: PropTypes.string,
        text: PropTypes.string
    }), 
    styles: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string
    })
}

export default ModalCC;
