import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HeroList from "./HeroesList";

import "./Heroes.css";

const DEFAULT_NO_HERO = {
  name: "",
  id: undefined
};

class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      selectedHero: DEFAULT_NO_HERO
    };
    this.selectHero = this.selectHero.bind(this);
  }

  selectHero(hero) {
    const heroIndex = this.props.heroes.map(o => o.id).indexOf(hero.id);
    hero = this.state.selectedHero.id !== hero.id ? hero : DEFAULT_NO_HERO;
    this.setState({
      selectedHero: {
        ...hero,
        index: heroIndex
      }
    });
  }

  render() {
    return (
      <div>
        <HeroList
          heroes={this.props.heroes}
          selectedHero={this.state.selectedHero}
          onHeroClick={this.selectHero}
        />
        {this.state.selectedHero.name && (
          <div>
            <h2>{this.state.selectedHero.name}</h2>
            <Link to={`/heroes/details/${this.state.selectedHero.id}`}>
              <button>Details</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  heroes: state.heroes
});

export default connect(mapStatetoProps)(Heroes);