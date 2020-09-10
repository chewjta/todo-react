import React from 'react';
import {Button} from 'react-bootstrap';


const Form = (props) => {
    return(
            <div>
            <Button variant="success"
            className="submit-btn"
            onClick={()=>{props.onClick()}}>
            Add Item
            </Button>
            </div>
        )

}

export default Form;