import React, { Component } from 'react';
import './Position.css';
import Player from '../player/Player'

class Position extends Component {
  render() {
    if(this.props.player) {
      return (
        <div className="Position">
          <Player player={this.props.player}/>
        </div>
      );
    }
    return (
      <div className="Position"/>
    );
  }
}

export default Position;
