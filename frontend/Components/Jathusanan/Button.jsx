import React, { Component } from 'react';
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
              console.log(this.state.info.fileName)
           
        }
    }
    
    render() { 
        return ( 
            
            <button type="button" className={this.state.style}  onClick={this.buttonActiveHandler}>{this.state.text}</button>
         );
    }
}
 
export default MyButton;