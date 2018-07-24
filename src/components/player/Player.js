import React, { Component } from 'react';
import PlayerImage from './Player.png';
import './Player.css';

class Player extends Component {
  render() {
      return (
        <div className="Player is-active">
          <img src={PlayerImage} className="Player-Image" alt="" />
          {this.props.player.name}
        </div>
      );
  }
}

export default Player;
