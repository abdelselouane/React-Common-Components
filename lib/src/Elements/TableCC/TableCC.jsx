import React from 'react';
import PropTypes from 'prop-types';

const TableCC = ({ className, rows, columns }) => {

        
        return (
            <React.Fragment>
                <table className={className}>
                    <thead>
                        <tr>{/* sortable 2 icons, sorted is bgcolor, ascending icon up, descending icon down */}
                        {
                            columns.map( (col, index) => {
                                return (<th key={`col-${index}`}
                                    className={
                                        col.sortable ? (col.orderBy ? `sortable ${col.orderBy.className}` : 'sortable' ) : col.className
                                    } 
                                    onClick={ col.sortable ? () => col.handleSortable(col.key) : () => {}}>
                                    <span>{col.displayName}</span>
                                </th>);
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rows.map( (row, index) => {
                                return (
                                <tr key={`row-${index}`} {...row.props} >
                                {
                                    columns.map( (col, i) => (
                                        <td key={`col-${index}-${i}`}>{row[col.key]}</td>
                                    ))
                                    }
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    
}

TableCC.propTypes = {
    className: PropTypes.string.isRequired,
    rows: PropTypes.array.isRequired, 
    columns: PropTypes.array.isRequired
}

export default TableCC;