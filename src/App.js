import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landingpage from "./components/Landingpage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landingpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
