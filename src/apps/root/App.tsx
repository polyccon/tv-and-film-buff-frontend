import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import Home from "apps/Home";
import Navbar from "apps/Navbar";
import MyFilms from "apps/MyFilms";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/myfilms">
            <MyFilms />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
