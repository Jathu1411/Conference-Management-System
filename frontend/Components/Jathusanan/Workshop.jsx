import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MyButton from "./Button";
import RejButton from "./RejButton";
class WorkShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      isClicked: false,
      updateURL: "http://localhost:5000/api/updateStatus/",
    };
    this.getAll = this.getAll.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/getworkshop").then((res) => {
      console.log(res.data);
      this.setState({ details: res.data.data });
    });
  }
  getAll() {
    return this.state.details.map((info, index) => {
      return (
        <tr key={info._id}>
          <td>{index + 1}</td>
          <td>{info.wtitle}</td>
          <td>
            <a href={"http://localhost:5000/" + info.filePath} target="_blank">
              {info.fileName}
            </a>
          </td>
          <td>{info.user.name}</td>
          <td>{info.venue}</td>
          <td>{info.date}</td>
          <td>
            <MyButton
              status={this.state.isClicked}
              updateURL={this.state.updateURL}
              info={info}
              content={
                "Hi " +
                info.user.name +
                " your Workshop has been Approved By the Reviewer!!"
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
                " your Workshop has been Rejected By the Reviewer!!"
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
            <th>Title</th>
            <th>FileName</th>
            <th>WorkShop Conductor</th>
            <th>Venue</th>
            <th>DateTime</th>
            <th>Approve</th>
            <th>Decline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{this.getAll()}</tbody>
      </Table>
    );
  }
}

export default WorkShop;
