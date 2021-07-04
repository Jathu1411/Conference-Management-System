import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.process = this.process.bind(this);
    this.process2 = this.process2.bind(this);
    this.state = {
      research: [],
      workshop: [],
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/getSingleFiles").then((res) => {
      this.setState({ research: res.data.data });
      console.log(res.data.data);
    });
    axios.get("http://localhost:5000/api/getworkshop").then((res) => {
      this.setState({ workshop: res.data.data });
      console.log(res.data.data);
    });
  }

  process() {
    let count = 0;
    this.state.research.map((item) => {
      if (item.status === "Pending") {
        count++;
      }
    });
    return count;
  }
  process2() {
    let count = 0;
    this.state.workshop.map((item) => {
      if (item.status === "Approved") {
        count++;
      }
    });
    return count;
  }

  render() {
    return (
      <div data-testid = 'dashboard-1'>
        <Card
          variant="success"
          style={{ marginTop: "100px", width: "500px", marginLeft: "390px" }}
        >
          <Card.Header as="h5">Review Papers</Card.Header>
          <Card.Body>
            <Card.Title>
              Total Research Requests : {this.state.research.length}
            </Card.Title>
            <Card.Text>
              Approved Requests : {this.state.research.length - this.process()}
            </Card.Text>
            <Card.Text>Pending Requests : {this.process()}</Card.Text>
            <Button variant="primary" href="/Research">
              Go to Research Page
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{ marginTop: "100px", width: "500px", marginLeft: "390px" }}
        >
          <Card.Header as="h5">Workshops</Card.Header>
          <Card.Body>
            <Card.Title>
              Total Workshop Documents : {this.state.workshop.length}
            </Card.Title>
            <Card.Text>Approved Requests : {this.process2()}</Card.Text>
            <Card.Text>
              Pending Requests : {this.state.workshop.length - this.process2()}
            </Card.Text>
            <Button variant="primary" href="/Workshop">
              {" "}
              Go to Workshop Page
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DashBoard;
