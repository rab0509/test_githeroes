import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionsCreators, bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import Heroes from "../Heroes";
import HeroAdd from "../Heroes/HeroAdd";
import HeroesEdit from "../Heroes/HeroesEdit";
import Dashboard from "../Dashboard";

import * as TodoActions from "../../actions";

import "./App.css";

const App = ({ todos, actions }) => {
  console.log(todos);
  console.log(actions);
  return (
      <Router>
      <div>
        <h1>Git Tour of Heroes</h1>
        <nav>
          <NavLink to="/" activeClassName="active">
            Dashboard
          </NavLink>
          <NavLink to="/heroes" activeClassName="active">
            Heroes
          </NavLink>
          <NavLink to="/newheroes" activeClassName="active">
            Add a New Hero
          </NavLink>
        </nav>
        <hr />
        <Route exact path="/" component={Dashboard} />
        <Route path="/heroes" component={Heroes} />
        <Route path="/newheroes" component={HeroAdd} />
        <Route path={"/heroes/details/:heroid"} component={HeroesEdit} />
      </div>
      </Router>
  );
};

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);



//<Heroes />
//<Dashboard todos={todos} actions={actions} />
//<HeroAdd addTodo={actions.addTodo} id={todos.id} />
//<HeroesEdit editTodo={actions.editTodo} />

//<Route exact path="/" component={Dashboard} />