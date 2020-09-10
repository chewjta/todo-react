import React from 'react';
import {Card,Button} from 'react-bootstrap';

const Addedlist = (props) => {
const listItems = props.list.map(item=>{
        return(
            <Card style={{ width: '30rem', margin:'10px auto' }}>
          <Card.Body>
            <Card.Title>{item.value}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
            <Button variant='danger' onClick={()=>{props.deleteItem(item.id)}}>Delete</Button>
          </Card.Body>
        </Card>
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


