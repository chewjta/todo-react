import React from 'react';

const Deletedlist = (props) => {
const deletedItems = props.list.map(item=>{
        return(
            <li key={`deleted ${item[0].id}`}>
                <div className="list-item">

                    <div className="description">
                        {item[0].value}
                    </div>
                    <div className="created">
                        {item[0].date}
                    </div>
                </div>
            </li>
            )
})
    return (
        <div>
        <h3>Deleted Items:</h3>
            <ul>{deletedItems}</ul>
        </div>
        )
}

export default Deletedlist