import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
export default class sampleform extends Component {
    constructor (props){
        super(props);

        this.onChangeEmail =this.onChangeEmail.bind(this);
        this.onChangeName =this.onChangeName.bind(this);
        this.onChangeAge =this.onChangeAge.bind(this);

        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            email:"",
            name:"",
            age:"",
         };
    }

    onChangeEmail(e) {
        this.setState({
          email: e.target.value,
        });
      }

      onChangeName(e) {
        this.setState({
          name: e.target.value,
        });
      }

      onChangeAge(e) {
        this.setState({
          age: e.target.value,
        });
      }

      onSubmit(e) {
        e.preventDefault();
    
        const UserDetails = {
          email: this.state.email,
          name: this.state.name,
          age: this.state.age,
        };


        axios
      .post("http://localhost:5000/api/user/add",UserDetails )
      .then((res) => {
        console.log(res.data);
      });

    this.setState({
            email:"",
            name:"",
            age:"",
    });


    }
    
      
    render() {
        return (
            <div>
            <Form  onSubmit={this.onSubmit}>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={this.onChangeEmail} value={this.state.email}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter name" onChange={this.onChangeName} value={this.state.name}/>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                 <Form.Control type="email" placeholder="Enter  age" onChange={this.onChangeAge} value={this.state.age}/>
             </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}
