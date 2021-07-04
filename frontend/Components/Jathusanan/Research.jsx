import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MyButton from "./Button";
import RejButton from "./RejButton";
class Research extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      isClicked: false,
      updateURL: "http://localhost:5000/api/update/",
    };
    this.getAll = this.getAll.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/getSingleFiles").then((res) => {
      console.log(res.data.data);
      this.setState({ details: res.data.data });
    });
  }
  getAll() {
    return this.state.details.map((info, index) => {
      return (
        <tr key={info._id}>
          <td>{index + 1}</td>
          <td>{info.rtitle}</td>
          <td>
            <a href={"http://localhost:5000/" + info.filePath} target="_blank">
              {info.fileName}
            </a>
          </td>
          <td>{info.user.name}</td>
          <td>
            <MyButton
              status={this.state.isClicked}
              updateURL={this.state.updateURL}
              info={info}
              content={
                "Hi " +
                info.user.name +
                " your Research paper have got Approved By the Reviewer!!"
              }
            />
          </td>
          <td>
            <RejButton
              status={this.state.isClicked}
              info={info}
              updateURL={this.state.updateURL}
              content={
                "Sorry " +
                info.user.name +
                " your Research paper have got Rejected By the Reviewer!!"
              }
            />
          </td>
          <td>{info.status}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <>
        <h3
          style={{ marginTop: "75px", marginLeft: "390px" }}
          className="container"
        >
          Review Research Paper
        </h3>
        <Table
          striped
          bordered
          hover
          className="container-md"
          style={{ marginTop: 100 }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Topic</th>
              <th>FileName</th>
              <th>Research Conductor</th>
              <th>Approve</th>
              <th>Decline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{this.getAll()}</tbody>
        </Table>
      </>
    );
  }
}

export default Research;
