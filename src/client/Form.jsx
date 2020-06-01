import React from 'react';
import Moment from 'react-moment';


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

    deleteListItem(index) {
        let filtered = [];
        filtered = this.state.todoArr.slice(0, index).concat(this.state.todoArr.slice(index + 1));
        this.setState({todoArr: filtered});
    }

    formatDate(date) {
          let hours = date.getHours();
          let minutes = date.getMinutes();
          let ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? '0'+minutes : minutes;
          let strTime = hours + ':' + minutes + ' ' + ampm;
          return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
        }







  render() {


    let d = new Date();
    let e = this.formatDate(d);





    const currentTime = new Date().toLocaleString()
    console.log(currentTime);
     const list = this.state.todoArr.map((el, index) => {
            return (
                <div key={index}>
                <li key={index}>{el} <button key={index} onClick={(event) => { this.deleteListItem(index)}}>Delete</button></li>
                <p>Created at: <Moment parse="YYYY-MM-DD HH:mm">{e}</Moment></p>
                </div>
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