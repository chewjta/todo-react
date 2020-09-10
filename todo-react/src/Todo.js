import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Input from './Input';
import Form from './Form';
import Addedlist from './Addedlist';
import Deletedlist from './DeletedList';

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

    deleteItem = (id) => {
        const list = [...this.state.list];
        const updatedList = list.filter(item=>item.id != id);
        const deletedItem = list.filter(item=>item.id == id);
        const deletedList = [...this.state.deletedList, deletedItem];
        console.log(deletedList)
        this.setState({ list: updatedList, deletedList: deletedList });
    }


updateInput = (value) => {
    console.log(value)
    this.setState({
        newItem: value
    })
}

    render(){
        return(
            <div>
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


export default Todo;