import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components - Jathu
import Research from "./Components/Jathusanan/Research"; // Reviewer DashBoard
import NavBar from "./Components/Jathusanan/NavBar";
import DashBoard from "./Components/Jathusanan/DashBoard";
import Workshop from "./Components/Jathusanan/Workshop";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact={true} component={DashBoard} />
            <Route path="/Research" exact={true} component={Research} />
            <Route path="/Workshop" exact={true} component={Workshop} />
          </Switch>
        </Router>
        <ToastContainer />
      </div>
    );
  }
}
