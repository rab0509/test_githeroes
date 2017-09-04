import React, { Component } from "react";
import "./Heroes.css";

import { getHeroes, getHeroesSlowly } from "../../services/heroes.service";
import { Route } from "react-router-dom";

const DEFAULT_NO_HERO = {
  name: "",
  id: undefined
};

class Heroes extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      selectedHero: DEFAULT_NO_HERO
    };

    //Binding is no longer inheriantly done with extends component
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectHero = this.selectedHero.bind(this);
  }

  /*
  We need to now 'call' for our heros when this compoent is going to be mounted
  */
  componentWillMount() {
    getHeroesSlowly.then(payload => {
      this.setState({
        heroes: payload
      });
    });
  }
  /*
  capture the index of the selected hero for handleChange
  also if the id of hero param is the current selectedHero, reset it
  */
  selectedHero(hero) {
    const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
    hero = this.state.selectedHero.id !== hero.id ? hero : DEFAULT_NO_HERO;
    this.setState({
      selectedHero: {
        ...hero,
        index: heroIndex
      }
    });
  }

  //Object spread operator over hero object from state
  handleChange(event) {
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        name: event.target.value
      }
    });
  }

  handleSubmit(event) {
    //Sweet mother of mary!! what is going on here ?!?!
    //So much to keep it from mutating
    this.setState({
      heroes: [
        ...this.state.heroes.slice(0, this.state.selectedHero.index),
        { id: this.state.selectedHero.id, name: this.state.selectedHero.name },
        ...this.state.heroes.slice(
          this.state.selectedHero.index + 1,
          this.state.heroes.length
        )
      ],
      selectedHero: DEFAULT_NO_HERO
    });
    event.preventDefault();
  }

  render() {
    const heroesList = this.state.heroes.map(function(hero) {
      return (
        <li
          className={hero.id === this.state.selectedHero.id ? "selected" : ""}
          key={hero.id}
          onClick={() => this.selectedHero(hero)}
        >
          <span className="badge">{hero.id}</span> {hero.name}
        </li>
      );
    }, this);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <ul className="heroes">{heroesList}</ul>
        <div>
          <div>
            <label>id: </label>
            {this.state.selectedHero.id}
          </div>
          <form onSubmit={this.handleSubmit}>
            <label>name: </label>
            <input
              type="text"
              value={this.state.selectedHero.name}
              onChange={this.handleChange}
            />
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }  

}

export default Heroes;