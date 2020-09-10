import React from 'react';

const Form = (props) => {
    return(
            <div>
            <button
            className="submit-btn"
            onClick={()=>{props.onClick()}}>
            Add Item
            </button>
            </div>
        )

}

export default Form;