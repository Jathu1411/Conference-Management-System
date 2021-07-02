import React, { Component } from 'react';
import axios from 'axios'
class MyButton extends Component {
    constructor(props){
        super(props);
        this.buttonActiveHandler = this.buttonActiveHandler.bind(this);
        this.state ={
            status : this.props.status,
            info : this.props.info,
            text : 'Reject',
            style : 'btn btn-warning'
        }
        
    }
     buttonActiveHandler(){
        if(this.state.status == false){
              this.setState({status : true})
              this.setState({text : "Rejected"})
              this.setState({style : "btn btn-danger"})
              console.log(this.state.info._id)
              const Reject = {
                status : 'Rejected'
                }
                const notification = {
                    content : 'Sorry ' + this.state.info.user.name + ' your Research paper have got Rejected By the Reviewer !!',
                    user : this.state.info.user._id
                }
                console.log(notification)
              axios.patch("http://localhost:5000/api/update/" + this.state.info._id,Reject).then((res) => console.log(res.data))
              axios.post('http://localhost:5000/api/notification',notification).then(res => console.log(res.data));
           
        }
    }
    
    render() { 
        return ( 
            
            <button type="button" className={this.state.style}  onClick={this.buttonActiveHandler}>{this.state.text}</button>
         );
    }
}
 
export default MyButton;