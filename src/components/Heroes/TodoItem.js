import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";

class TodoItem extends Component {
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text) => {
    this.props.editTodo(id, text);
    this.setState({ editing: false });
  };

  render() {
    const { todo, completeTodo } = this.props;
    let element;

    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
        </div>
      );
    }    
    return (
      <li
        className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}

export default TodoItem;