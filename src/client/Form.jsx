import React from 'react';

class Form extends React.Component {

    constructor() {
        super()

        this.state = {
            listItem: "",
            todoArr:[],
            inputClass: 'normal',
            errorMsg: ""
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



  render() {
     const list = this.state.todoArr.map((el, index) => {
            return (
                <li key={index}>{el}</li>
                )
        })

     const message = this.state.errorMsg;

    return (
        <div>
                <ul>
                    {list}
                </ul>
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



        </div>
        )
      }
}

export default Form;