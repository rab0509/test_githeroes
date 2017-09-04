import React, { Component } from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { getHeroes, getHeroesSlowly, getHeroById } from "../../services/heroes.service";

class HeroesEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroId: parseInt(props.match.params.heroid)
    };
  }

  componentWillMount() {
    getHeroById(this.state.heroId).then(payload => {
      this.setState({
        hero: payload
      });
    });
  }

  handleSubmit = event => {
    /* Need to fix Edit */
    alert("Submit button pressed");
    const text = event.target.value.trim();
    this.props.onSave(text);
    if (this.props.newTodo) {
      this.setState({ text: "" });
    }
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
  }

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
    const hero = this.state.hero;
    if (!hero) {
      return <div>Loading.......</div>;
    }
    return (
      <div>
        <div>
          <h2>{hero.name} details!</h2>
          <label>id: </label>
          {hero.id}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>name: </label>
          <input
            type="text"
            value={hero.name}
            onChange={this.props.handleChange}
            onDoubleClick={this.handleDoubleClick}
          />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

HeroesEdit.propTypes = {};

export default HeroesEdit;

/*
        <nav>
          <NavLink to="/heroes" activeClassName="active">
            back
          </NavLink>
        </nav>
*/