import React, { Component } from 'react';
import './Position.css';
import Player from '../player/Player'

class Position extends Component {

  constructor(props) {
    super(props);
    this.state = { draggedOver: false };
  }

  onDrop(event) {
    event.preventDefault();
    // console.log('Position Dropped: ' + this.props.positionId);
    this.setState({
      draggedOver: false
    })

    this.props.onDropCallback(this.props.positionId);
  }

  onDragOver(event) {
    event.preventDefault();
    this.setState({
      draggedOver: true
    })
  }

  onDragLeave(event) {
    event.preventDefault();
    this.setState({
      draggedOver: false
    })
  }

  render() {
    const {draggedOver} = this.state; 
    return (
      <div 
        className={draggedOver ? "Position dragged-over" : "Position"} 
        onDragOver={(event) => this.onDragOver(event)} 
        onDragLeave={(event) => this.onDragLeave(event)} 
        onDrop={(event) => this.onDrop(event)}
      >
        {this.props.player ? <Player onDragEndCallback={this.props.onDragEndCallback} positionId={this.props.positionId} player={this.props.player}/> : null}
      </div>
    );
  }
}

export default Position;
