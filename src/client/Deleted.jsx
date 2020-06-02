import React from 'react';
import Moment from 'react-moment';

const Deleted = (props) => {

    function formatDate(date) {
          let hours = date.getHours();
          let minutes = date.getMinutes();
          let ampm = hours >= 12 ? 'pm' : 'am';
          hours = hours % 12;
          hours = hours ? hours : 12; // the hour '0' should be '12'
          minutes = minutes < 10 ? '0'+minutes : minutes;
          let strTime = hours + ':' + minutes + ' ' + ampm;
          return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
        }

         let d = new Date();
         let e = formatDate(d);

    const item = props.deletedItems.map((el, index) => {
            return (
                <div key={index}>

                <li key={index}>{el} </li>
                <p>Deleted at: <Moment parse="YYYY-MM-DD HH:mm">{e}</Moment></p>
                </div>
                )
        })

    return(

        <div>{item}</div>
        )
}

export default Deleted;