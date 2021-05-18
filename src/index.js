import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
class Main extends React.Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
