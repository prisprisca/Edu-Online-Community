import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landingpage from "./components/Landingpage";
import SignInOut from "./container/SignInOut";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/signinout" component={SignInOut} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
