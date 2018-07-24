import React, { Component } from 'react';
import pitchImage from './Pitch.png';
import './Pitch.css';
import Position from '../position/Position'

class Pitch extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      positionIdToSwap: null,
      positions: this.loadPositionsFromDb()
    };
  }

  renderPositions = () => {

    for(let i = 0; i < 11; i ++){
      return (
        <Position />
      );
    }
  }

  loadPositionsFromDb(){
    function Position(positionId, player){
      this.positionId = positionId;
      this.player = player;
    }
    
    function Player(name, number) {
      this.name = name;
      this.number = number;
    }

    const positionArray442 = [
      [new Position(0), new Position(1, new Player('SC', 9)), new Position(2), new Position(3, new Player('SC', 11)), new Position(4)],
      [new Position(5), new Position(6), new Position(7), new Position(8), new Position(9)],
      [new Position(10, new Player('LM', 8)), new Position(11, new Player('CM', 10)), new Position(12), new Position(13, new Player('CM', 6)), new Position(14, new Player('RM', 7))],
      [new Position(15), new Position(16), new Position(17), new Position(18), new Position(19)],
      [new Position(20, new Player('LB', 5)), new Position(21, new Player('CB', 21)), new Position(22), new Position(23, new Player('CB', 3)), new Position(24, new Player('RB', 4))],
      [new Position(25), new Position(26), new Position(27, new Player('GK', 1)), new Position(28), new Position(29)]
    ];

    // const playerArray433 = [
    //   [new Player('LW', 11), {}, new Player('SC', 9), {}, new Player('RW', 7)],
    //   [{}, {}, {}, {}, {}],
    //   [{}, new Player('CM', 10), {}, new Player('CM', 8), {}],
    //   [{}, {}, new Player('DM', 6), {}, {}],
    //   [new Player('LB', 5), new Player('CB', 2), {}, new Player('CB', 3), new Player('RB', 4)],
    //   [{}, {}, new Player('GK', 1), {}, {}],
    // ];

    return positionArray442;
  }


  // yuck. Switch to something nicer
  swapPositions(newPos, oldPos){
    const {positions} = this.state;

    

    for (let oldY = 0; oldY < 6; oldY++) {
      for (let oldX = 0; oldX < 5; oldX++) {
        if(positions[oldY][oldX].positionId === oldPos){

          for (let newY = 0; newY < 6; newY++) {
            for (let newX = 0; newX < 5; newX++) {
              if(positions[newY][newX].positionId === newPos){
                const toSwap = positions[newY][newX];
                positions[newY][newX] = positions[oldY][oldX];
                positions[oldY][oldX] = toSwap;

                this.setState({
                  positions
                });

                return;
              }
            }
          }

        }
      }
    }


  }

  onDragEnd(previousPositionId) {
    const {positionIdToSwap} = this.state; 
    console.log('Previous: ' + previousPositionId);
    if (positionIdToSwap != null && positionIdToSwap !== previousPositionId){
      console.log('Swapping: ' + positionIdToSwap + ' with: ' + previousPositionId);
      this.swapPositions(positionIdToSwap, previousPositionId);
      this.setState({
        positionIdToSwap: null
      })
    }
  }

  onDrop(newPositionId) {
    console.log('New Pos: ' + newPositionId);
    this.setState({
      positionIdToSwap: newPositionId
    })
  }

  render() {
    let positionsRender = [];
    const {positions} = this.state;
    for (let i = 0; i < 6; i++) {
      if(positions[i][2].visible) {
        positionsRender.push(
          <div key={i}>
            <div className="Pitch-Grid-Five">
              {positions[i].map(x=> <Position key={'Position' + x.positionId} onDragEndCallback={(previousPositionId) => this.onDragEnd(previousPositionId)} onDropCallback={(newPositionId) => this.onDrop(newPositionId)} positionId={x.positionId} player={x.player} />)}
            </div>
          </div>
        );
      } else {
        positionsRender.push(
          <div key={i}>
            <div className="Pitch-Grid-Four">
              {positions[i].map(x=> <Position key={'Position' + x.positionId} onDragEndCallback={(previousPositionId) => this.onDragEnd(previousPositionId)} onDropCallback={(newPositionId) => this.onDrop(newPositionId)} positionId={x.positionId} player={x.player} />)}
            </div>
          </div>
        );
      } 
    }
    return (
      <div className="Pitch">
        <img src={pitchImage} className="Pitch-Image" alt="" />
        <div className="Pitch-Grid">
          {positionsRender}
        </div>
      </div>
    );
  }
}

export default Pitch;
