import React from 'react';

const Input = (props) => {
    return (
        <div>
            <input
            type="text"
            className = "input-field"
            value={props.newItem}
            onChange = {(e)=>{
                e.preventDefault();
                e.persist();
                props.onChange(e.target.value)}} />
        </div>
        )
}

export default Input