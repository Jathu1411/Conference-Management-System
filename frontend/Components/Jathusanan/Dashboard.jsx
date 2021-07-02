import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MyButton from "./Button";
import RejButton from './RejButton';
import {Alert} from 'react-bootstrap/Alert'
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { details: [] , isClicked : false  };
    this.getAll = this.getAll.bind(this);

  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/getSingleFiles").then((res) => {
      console.log(res.data.data);
      this.setState({ details: res.data.data });
    });

  
  
  }
  getAll(){
     return this.state.details.map((info,index) => {
       return(
        <tr key={info._id}>
        <td>{index + 1}</td>
        <td>{info.rtitle}</td>
        <td><a href={"http://localhost:5000/" + info.filePath} target="_blank" >{info.fileName}</a></td>
        <td>{info.user.name}</td>
        <td><MyButton status={this.state.isClicked} info={info}/></td>
        <td><RejButton status={this.state.isClicked} info={info}/></td>
        </tr>

       )
     })
  }

  render() {
    return (
      <Table striped bordered hover  >
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
          {this.getAll()}
        </tbody>
      </Table>
    );
  }
}

export default Dashboard;
