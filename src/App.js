import React from "react";
import CreateAccount from "./Components/CreateAccount";
import LeaveArev from "./Components/LeaveArev";
import Sign from "./Components/Sign";
import Home from "./Components/Home";
import Navigation from "./navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign" component={Sign} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/leavearev" component={LeaveArev} />
      </Switch>
    </div>
  );
}

export default App;
