import React from 'react';

const CheckboxGroupCC = (props) => {
    const { handleSelectAll, selectAllState, handleCheckedGroupItems, group, id } = props
    //console.log('common', props);

    return (
        <div className="checkbox-group cc-checkbox-group" id={id}>
            <h4>Checkbox Group (Vertical)</h4>
            <div role="checkbox" 
                 className="select-all" 
                 aria-checked={selectAllState} 
                 onClick={handleSelectAll}
                 tabIndex="0" 
                 id={`cond-${id}`}>
                <label>Select All</label>
            </div>
            {
                group.map( item => (
                    <div key={`checkbox-${item.id}`} 
                         role="checkbox" 
                         aria-checked={item.checked} 
                         onClick={handleCheckedGroupItems} 
                         tabIndex="-1"
                         >
                        <label id={`cond-${item.id}`}>{item.label}</label>
                    </div>
                ))
            }
        </div>
    );
}


export default CheckboxGroupCC;