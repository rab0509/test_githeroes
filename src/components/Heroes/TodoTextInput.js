import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

class TodoTextInput extends Component {  
  constructor(props) {
  super(props);
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

  state = {
    text: this.props.text || ""
  };

  componentDidMount() {
    this.fetchUser();
  }

  //TODO: fetchUser class method needed meow

  fetchUser() {
    //this gets called when the component is instantiated & it mounts it to the DOM
    //fetch(`https://api.github.com/users/jtomchak?
    fetch(`https://api.github.com/users/jtomchak?
    access_token=554612bc8de7a1a6744b77055cbab693543d20f0`)
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          user: user
        });
      })
      .catch(err => console.log(err));
  }

  handleSubmit = event => {
    this.props.text = "this.state.text";
    const text = event.target.value.trim();
    this.props.onSave(text);
    if (this.props.newTodo) {
      this.setState({ text: this.props.text });
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
    //if state has no user property render this, otherwise continue on
    if (!this.state.user) {
      return <div className="user-page">LOADING......</div>;
    }

    return (
      <div>
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
        <div>
          <h4>Hero Name: {this.state.user.name}</h4>
          <h4>Hero id: {this.state.user.id}</h4>
          <img
            className="user-info__avatar"
            src={this.state.user.avatar_url}
            alt={`${this.state.user.login} avatar`}
          />
        </div>        
      </div>
    );
  }
}

export default TodoTextInput;