import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addHero } from "../../actions/index";

import GithubRepo from "./GithubRepo";

import { fetchGitHero, fetchGitRepos } from "../../services/heroes.service";

class HeroAdd extends Component {
  state = {
    hero: undefined,
    repos: undefined,
    error: undefined
  };

  handleSubmit = event => {
    event.preventDefault();
    fetchGitHero(this.refs.userInput.value)
      .then(user => {
        this.setState({
          hero: user,
          error: undefined
        });
      })
      .catch(err => {
        this.setState({
          hero: undefined,
          error: err.message
        });
      });
      
    fetchGitRepos(this.refs.userInput.value)
      .then(repo => {
        this.setState({
          repos: repo,
          error: undefined
        });
      })
      .catch(err => {
        this.setState({
          hero: undefined,
          error: err.message
        });
      });
  };

  handleClick = () => {
    this.props.addHero(this.state.hero);
    this.props.history.push("/");
  };

  render() {
    const hero = this.state.hero;
    return (
      <div>
        <h2>Enter a GitHub username</h2>
        <form onSubmit={this.handleSubmit}>
          <input ref="userInput" className="search-page__input" type="text" />
          <button className="btn btn-default" style={buttonStyle} type="submit">
            Search
          </button>
        </form>
        {this.state.hero && (
          <div>
            <h2>{hero.name} details!</h2>
            <label>id: </label>
            {hero.id} <br />
            <label> Bio: </label>
            {hero.bio} <br />
            <img
            className="user-info__avatar"
            src={hero.avatar_url}
            alt={`${hero.login} avatar`} /> <br />
            <h3>Repos</h3>
            <hr/>
            <ul className="followers-list">
              {this.state.repos.map(function(repo) {
                return (
                  <li key={repo.id}>
                    <GithubRepo repo={repo} />                    
                  </li>
                );
              })}
            </ul>
            <button
              className="create"
              style={buttonStyle}
              onClick={this.handleClick}
            >
              Add me as a hero!!
            </button>
          </div>
        )}
        {this.state.error && (
          <div>
            <h2>
              {"\u2639"}
              {this.state.error}
            </h2>
          </div>
        )}
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

const mapDispatchToProps = dispatch => ({
  addHero: bindActionCreators(addHero, dispatch)
});

export default connect(null, mapDispatchToProps)(HeroAdd);
