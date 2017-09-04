import React, { Component } from "react";
import TodoTextInput from "./TodoTextInput";
import PropTypes from "prop-types";
import * as types from "../../constants/ActionTypes";

export class HeroAdd extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = text => {
    if (text.length !== 0) {
      alert("handleSave entered");
      this.props.addTodo(text);
    }
  };

  render() { 
    //console.log("HeroAdd");
    return (
      <div>
        <header className="header">
          <TodoTextInput
            newTodo
            onSave={this.handleSave}
            placeholder=""
          />
        </header>
      </div>
    );
  }
}

export default HeroAdd;