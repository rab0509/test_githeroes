import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Heroes from "../Heroes/Heroes";
import Dashboard from "../Dashboard/Dashboard";
import HeroesForm from "../Heroes/HeroesForm";
import HeroAdd from "../Heroes/HeroAdd";

import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div>
          <h1>Git Tour of Heroes</h1>
          <nav>
            <NavLink exact to="/" activeClassName="active">
              Dashboard
            </NavLink>
            <NavLink exact to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
            <NavLink to="/heroes/add" activeClassName="active">
              Add a Hero
            </NavLink>
          </nav>
          <hr />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route exact path="/heroes/add" component={HeroAdd} />
          <Route path={"/heroes/details/:heroid"} component={HeroesForm} />
        </div>
      </Router>
    );
  }
}

export default App;