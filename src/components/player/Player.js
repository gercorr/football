import React, { Component } from 'react';
import PlayerImage from './Player.png';
import './Player.css';

class Player extends Component {

  constructor(props) {
    super(props);
    this.state = { isPressed: false };
  }

  onDragEnd(event) {
    event.preventDefault();
    this.props.onDragEndCallback(this.props.positionId);
  }

  preventDefault(event) {
    event.preventDefault();
  }

  render() {
    //add onTouchStart
    return (
      <div className={'Player'} onDragOver={this.preventDefault} onDragEnd={this.onDragEnd.bind(this)}>
        <img src={PlayerImage} className="Player-Image" alt="" />
        {this.props.player.name}
      </div>
    );
  }
}

export default Player;
