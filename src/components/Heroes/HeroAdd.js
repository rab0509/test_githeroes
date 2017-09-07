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
      this.props.addTodo(text);
    }
  };

  render() { 
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