import React from 'react';
import PropTypes from 'prop-types';

const ListItemCC = ({title, data, actions, columns }) => {

  return (
    <div
      className="card"
      style={{marginTop: "20px", width: "100%"}}>
      <div className="card-body">
        <h2
          className="card-title"
          style={{color:"#f96302"}}
        >{title}</h2>
        <div className="row">
          {
            columns.map( (column, index) => {
              return (<div
                className={column.className}
                key={index} >
                { column.label &&
                <label>{column.label}</label>
                }
                { data[column.key] &&
                <div><strong>{data[column.key]}</strong></div>
                }
                {
                  column.actions && actions.map( (action, index) => {
                    return (<button
                      className={action.className}
                      id={data.partNbr}
                      key={index}
                      onClick={action.onClick} >
                      {action.text}
                    </button>);
                  })
                }
              </div>);
            })
          }
        </div>
      </div>
    </div>
  );
};

ListItemCC.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  actions: PropTypes.array,
  columns: PropTypes.array.isRequired
};

export default ListItemCC;
