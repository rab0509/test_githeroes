import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

class TodoTextInput extends Component {  
  constructor() {
  super();
  this.state = {
    user: {}
  };
  this.fetchUser.bind(this);
  }

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placehold: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  };
/*
  state = {
    text: this.props.text || ""
  };
*/
  componentDidMount() {
    alert("componentDidMount entered");
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    //alert("componentDidUpdate entered");
//    this.fetchUser();
//    if (prevProps.params.username !== this.props.params.username) {   
//      this.fetchUser();
//    }
  }

  //TODO: fetchUser class method needed meow
  fetchUser() {
    alert("fetchUser entered");    
    //this gets called when the component is instantiated & it mounts it to the DOM
    //fetch(`https://api.github.com/users/${this.state.text}?
    fetch(`https://api.github.com/users/jtomchak?
    access_token=554612bc8de7a1a6744b77055cbab693543d20f0`)
      .then(resp => resp.json())
      .then(user => {
        console.log(user);
        this.setState((prevState, props) => ({
          //({ means we are returning an object
          user: user
        }));
      })
      .catch(err => console.log(err));
  }

  handleSubmit = event => {
    alert("handleSubmit entered");
    const text = event.target.value.trim();
    this.props.onSave(text);
    if (this.props.newTodo) {
      this.setState({ text: "" });
    }
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  handleBlur = event => {
    if (!this.props.newTodo) {
      this.props.onSave(event.target.value);
    }
  };

  render() {
    //alert("componentDidMount entered");
    //if state has no user property render this, otherwise continue on
    if (!this.state.user) {
      return <div className="user-page">LOADING......</div>;
    }

    //assuming the user is loaded, bc we check
    const user = this.state.user;

    //Now we can render, sweet    
    return (
      <form onSubmit={this.handleSubmit}>
        <label><b>Enter a git Hero to Add: </b></label>
        <input
          className={classnames({
            edit: this.props.editing,
            "new-todo": this.props.newTodo
          })}
          type="text"
          placeholder=""
          autoFocus="true"
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}       
       />
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoTextInput;