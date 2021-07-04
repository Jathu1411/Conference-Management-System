import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.buttonActiveHandler = this.buttonActiveHandler.bind(this);
    this.displayNoti = this.displayNoti.bind(this);
    this.state = {
      status: this.props.status,
      info: this.props.info,
      updateURL: this.props.updateURL,
      content: this.props.content,
      text: "Reject",
      style: "btn btn-warning",
    };
  }
  displayNoti() {
    return toast.error("Notification Sent to  " + this.state.info.user.name);
  }
  buttonActiveHandler() {
    if (this.state.status == false) {
      this.setState({ status: true });
      this.setState({ text: "Rejected" });
      this.setState({ style: "btn btn-danger" });
      const Reject = {
        status: "Rejected",
      };
      const notification = {
        content: this.state.content,
        user: this.state.info.user._id,
      };
      axios
        .patch(this.state.updateURL + this.state.info._id, Reject)
        .then((res) => console.log(res.data));
      axios
        .post("http://localhost:5000/api/notification", notification)
        .then((res) => console.log(res.data));
    }
    this.displayNoti();
  }

  render() {
    return (
      <button
        type="button"
        className={this.state.style}
        onClick={this.buttonActiveHandler}
      >
        {this.state.text}
      </button>
    );
  }
}

export default MyButton;
