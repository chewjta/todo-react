import React from 'react';

const Addedlist = (props) => {
const listItems = props.list.map(item=>{
        return(
            <li key={item.id}>
                <div className="list-item">
                    <div className="del-button">
                        <button onClick={()=>{props.deleteItem(item.id)}}>Delete</button>
                    </div>
                    <div className="description">
                        {item.value}
                    </div>
                    <div className="created">
                        {item.date}
                    </div>
                </div>
            </li>
            )
})
    return (
        <div>
        <h3>Current To-Do-List Items:</h3>
            <ul>{listItems}</ul>
        </div>
        )
}

export default Addedlist