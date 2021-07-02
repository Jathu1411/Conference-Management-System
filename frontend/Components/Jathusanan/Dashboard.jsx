import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MyButton from "./Button";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { details: [] , isClicked : false  };
    this.getAll = this.getAll.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onReject = this.onReject.bind(this);

  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/getSingleFiles").then((res) => {
      console.log(res.data.data);
      this.setState({ details: res.data.data });
    });

    
  }
  onAccept(data){
    this.setState( state => ({
      isClicked : !state.isClicked
    }))
    console.log(data._id)
    
  }
  onReject(data){
    console.log("Rejected")
    console.log(data._id)
  }
  getAll(){
     return this.state.details.map((info,index) => {
       return(
        <tr key={info._id}>
        <td>{index + 1}</td>
        <td>{info.rtitle}</td>
        <td><a href="https://www.google.lk" target="_blank" >{info.fileName}</a></td>
        <td>{info.fileName}</td>
        {/* <td><button type="button" class="btn btn-primary" onClick={() => this.onAccept(info)}>{this.state.isClicked ? "Approved" : "Approve"}</button></td>
        <td><button type="button" class="btn btn-danger" onClick={() => this.onReject(info)}>Reject</button></td> */}
        <td><MyButton status={this.state.isClicked} info={info}/></td>
        </tr>

       )
     })
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>FileName</th>
            <th>Research Conductor</th>
            <th>Approve</th>
            <th>Decline</th>
          </tr>
        </thead>
        <tbody>
          {/* {this.state.products.map((product) => {
              return (
              <tr key={product._id}>
              <td>{product._id}</td>
              </tr>
              )
          })} */}
          {this.getAll()}
        </tbody>
      </Table>
    );
  }
}

export default Dashboard;
