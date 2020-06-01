import React from 'react';

class Form extends React.Component {

    constructor() {
        super()

        this.state = {
            listItem: "",
            todoArr:[]
        }
    }

    handleChange(event) {
        this.setState({listItem: event.target.value});
        console.log(this.state.listItem);
    }

    handleClick() {
        this.state.todoArr.push(this.state.listItem);
        event.preventDefault();
    }




  render() {
    const list = this.state.todoArr.map((el, index) => {
        return (
            <li key={index}>{el}</li>
            )
    })

    return (

        <div>
                <ul>
                    {list}
                </ul>
            <form >
                <input
                    onChange={(event) => {this.handleChange(event);}}
                    type='text'
                    value={this.state.listItem}
                />
                <button type='submit' onClick={(event) => {this.handleClick(event);}}>Submit
                </button>
            </form>


        </div>
        )
      }
}

export default Form;