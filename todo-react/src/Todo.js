import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Input from './Input';
import Form from './Form';
import Addedlist from './Addedlist';
import Deletedlist from './DeletedList';
import {Button} from 'react-bootstrap';


class Todo extends React.Component {
    constructor(){
        super();
        this.state = {
            newItem: '',
            list: [],
            count:0,
            error:'',
            deletedList: []
        }
    }

// a todo component to store the state.
//State includes newitem string, list of items, count for indexing error for error message and deletedList to store deleted items


    handleClick = () => {
        const newItem = {
            id: this.state.count + 1,
            value: this.state.newItem,
            date: moment().format('DD MM YYYY hh:mm:ss')
        }
        let newItemLength = newItem.value.length;
        if(newItemLength > 1 && newItemLength < 200){
            this.setState({
                count: this.state.count + 1,
                list: [...this.state.list, newItem],
                newItem: ''
            })
        } else {
            this.setState({
                error: 'Input length error (Enter at least 1 character and less than 200 characters)'
            })
        }
    }


    //click function to handle adding of items to todolist and also displaying error message.

    deleteItem = (id) => {
        const list = [...this.state.list];
        const updatedList = list.filter(item=>item.id != id);
        const deletedItem = list.filter(item=>item.id == id);
        const deletedList = [...this.state.deletedList, deletedItem];
        console.log(deletedList[0])
        this.setState({ list: updatedList, deletedList: deletedList });
    }

//delete function to handle deletion of todolist items.

updateInput = (value) => {
    console.log(value)
    this.setState({
        newItem: value
    })
}

//update input to update newItem string, so that it stores the value of event.target.value before adding to todolist.

    render(){
        return(
            <div>
                <h1>Another List of Alvis' Random Stuff To Do</h1>
                <Input newItem={this.state.newItem} onChange={this.updateInput}/>
                <Form onClick = {this.handleClick}/>
                    <p className="error-message">{this.state.error}</p>

                <Addedlist
                list={this.state.list}
                deleteItem={this.deleteItem}/>

                <Deletedlist
                list={this.state.deletedList}
                />

            </div>
            )
    }

}
// a component for input field, add to list button, addedlist component and deleted list component for easy manipulation

export default Todo;