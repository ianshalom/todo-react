import React from 'react';
import Moment from 'react-moment';
import TodoItem from './Todoitem';
import Deleted from './Deleted';
import style from './style.css';


class Form extends React.Component {

    constructor() {
        super()

        this.state = {
            listItem: "",
            todoArr:[],
            inputClass: 'normal',
            errorMsg: "",
            deleted: []
        }
    }

    handleChange(event) {

        let item = event.target.value;
        this.setState({listItem: item});

        // this.setState({todoArr: push(this.state.listItem);
        // console.log(this.state.listItem);
    }

    handleClick(event) {
        if(this.state.listItem.length < 1) {
            this.setState({inputClass: 'error', errorMsg: 'Please key in at least 1 character' })
        } else {
                this.state.todoArr.push(this.state.listItem)
                this.setState({inputClass: "", errorMsg: "", listItem: ""})
                event.preventDefault();
        }

    }

    deleteListItem(index) {
        let filtered = [];
        filtered = this.state.todoArr.slice(0, index).concat(this.state.todoArr.slice(index + 1));
        this.state.deleted.push(this.state.todoArr[index]);
        this.setState({todoArr: filtered});
        // console.log("#####################")
        // console.log(this.state.deleted);
        // console.log("#####################")
    }

  render() {

     const message = this.state.errorMsg;



    return (
        <div>
                {message}
                <input
                    className={this.state.inputClass}
                    onChange={(event) => {this.handleChange(event);}}
                    type='text'
                    value={this.state.listItem}
                />
                <button onClick={(event) => {
                this.handleClick(event);
            }}>Submit
                </button>
                <h2 style={{textDecoration: 'underline'}}>Todo list</h2>
                <TodoItem itemArr={this.state.todoArr} delete={(index) => {this.deleteListItem(index)}}/>
                <h3 style={{textDecoration: 'underline'}}>Deleted Items</h3>
                <Deleted deletedItems={this.state.deleted} />
        </div>
        )
      }
}

export default Form;