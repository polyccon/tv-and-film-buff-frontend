import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
