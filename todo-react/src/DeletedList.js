import React from 'react';
import {Card} from 'react-bootstrap'

const Deletedlist = (props) => {
const deletedItems = props.list.map(item=>{
        return(
            //need to assess index 0 because filter returns an array so props.list gives us an array of arrays.
                   <Card style={{ width: '30rem', margin:'10px auto' }}>
                  <Card.Body>
                    <Card.Title>{item[0].value}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item[0].date}</Card.Subtitle>
                  </Card.Body>
                </Card>
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


