import React, { Component } from "react";

export class NewHero extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Hero Name: {this.state.payload.name}</h2>
          <h2>Hero id: {this.state.payload.id}</h2>
          <div>
          {this.state.payload.avatar_url}
          </div>
        </div>
      </div>
    );
  }
}

export default NewHero;