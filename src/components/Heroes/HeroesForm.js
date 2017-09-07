import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveHero, deleteHero } from "../../actions/index";

class HeroesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: this.props.hero
    };
  }

  handleChange = event => {
    this.setState({
      hero: {
        ...this.state.hero,
        name: event.target.value        
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSave(this.state.hero.id, this.state.hero.name);
    this.props.history.goBack();
  }

  handleDelete = event => {
    event.preventDefault();
    this.props.onDelete(this.state.hero.id);
    this.props.history.goBack();
  }

  render() {
    const hero = this.state.hero;
    if (!hero) {
      return <div>Loading.......</div>;
    }
    return (
      <div>
        <div>
          <h2>{hero.name} Details!</h2>
          <label>id: </label>
          {hero.id}
        </div>
        <form onSubmit={this.onSubmit}>
          <label>name: </label>
          <input
            type="text"
            value={hero.name}
            onChange={this.handleChange}
          />
          <input className="button" type="submit" value="Save" />
        </form>
        <br/>
        <img
            className="user-info__avatar"
            src={hero.avatar_url}
            alt={`${hero.login} avatar`} />
        <br/>
        <button
            className="destroy"
            onClick={this.handleDelete}>
            Delete Hero
        </button>
      </div>
    );
  }
}

const mapStatetoProps = (state, props) => {
  const heroId = parseInt(props.match.params.heroid, 10);
  return {
    hero: state.heroes.find(hero => hero.id === heroId)
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: bindActionCreators(saveHero, dispatch),
  onDelete: bindActionCreators(deleteHero, dispatch)
});

HeroesForm.propTypes = {};

export default connect(mapStatetoProps, mapDispatchToProps)(HeroesForm);
