import React from "react";
import CreateAcct from "./Components/CreateAcct";
import LeaveArev from "./Components/LeaveArev";
import Sign from "./Components/Sign";
import Home from "./Components/Home";
import Social from "./Components/Social";
import Navigation from "./navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <Navigation />
        <Switch>
          <Route path="/createaccount" component={CreateAcct} />
          <Route exact path="/" component={Home} />
          <Route path="/sign" component={Sign} />
          <Route path="/leavearev" component={LeaveArev} />
        </Switch>
      </div>
      <Social />
    </div>
  );
}

export default App;
