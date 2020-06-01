import React from 'react';

class Form extends React.Component {

    constructor() {
        super()

        this.state = {
            listItem: "",
            todoArr:[],
            inputClass: 'normal'
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
            this.setState({inputClass: 'error'})
            alert('Please key in more alphabets');
        } else {
                this.state.todoArr.push(this.state.listItem)
                console.log(this.state.todoArr);
                event.preventDefault();
        }

    }



  render() {
     const list = this.state.todoArr.map((el, index) => {
            return (
                <li key={index}>{index + 1}: {el}</li>
                )
        })
    return (
        <div>
                <ul>
                    {list}
                </ul>

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