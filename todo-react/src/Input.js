import React from 'react';
import {FormControl,InputGroup} from 'react-bootstrap'


const Input = (props) => {
    return (
        <div>

            <FormControl
            style={{width:'800px',margin:'20px auto'}}
            placeholder="What's Next"
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