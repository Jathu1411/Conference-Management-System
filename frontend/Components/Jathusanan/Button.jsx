import React, { Component } from 'react';
import axios from 'axios'
import Toast from 'react-bootstrap/Toast'

class MyButton extends Component {
    constructor(props){
        super(props);
        this.buttonActiveHandler = this.buttonActiveHandler.bind(this);
        this.state ={
            status : this.props.status,
            info : this.props.info,
            text : 'Approve',
            style : 'btn btn-primary'
        }
        
    }
    
     buttonActiveHandler(){
        if(this.state.status == false){
              this.setState({status : true})
              this.setState({text : "Approved"})
              this.setState({style : "btn btn-success"})
              const Approve = {
                status : 'Approved'
                }
                const notification = {
                    content : 'Hi ' + this.state.info.user.name + ' your Research paper have got Approved By the Reviewer!!',
                    user : this.state.info.user._id
                }
                console.log(notification)
            
            axios.patch("http://localhost:5000/api/update/" + this.state.info._id,Approve).then((res) => console.log(res.data))
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