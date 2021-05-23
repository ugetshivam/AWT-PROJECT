import React from "react";
import CreateAcct from "./Components/CreateAcct";
import LeaveArev from "./Components/LeaveArev";
import Sign from "./Components/Sign";
import Home from "./Components/Home";
import Social from "./Components/Social";
import ResVill from "./Gamepages/ResVill";
import got from "./Gamepages/got";
import hitman from "./Gamepages/hitman";
import lou from "./Gamepages/lou";
import metro from "./Gamepages/metro";
import returnal from "./Gamepages/returnal";
import spiderman from "./Gamepages/spiderman";
import wdl from "./Gamepages/wdl";
import Navigation from "./navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="Mainapp">
      <div id="header">
        <Navigation />
      </div>
      <Switch>
        <Route path="/createaccount" component={CreateAcct} />
        <Route exact path="/" component={Home} />
        <Route path="/sign" component={Sign} />
        <Route path="/leavearev" component={LeaveArev} />
        <Route path="/ResVill" component={ResVill} />
        <Route path="/got" component={got} />
        <Route path="/returnal" component={returnal} />
        <Route path="/lou" component={lou} />
        <Route path="/spiderman" component={spiderman} />
        <Route path="/wdl" component={wdl} />
        <Route path="/hitman" component={hitman} />
        <Route path="/metro" component={metro} />
      </Switch>
    </div>
  );
}

export default App;
