import React, { Component } from 'react';
import './Game.css';
import Board from '../board/Board';

class Game extends Component {
  constructor(props){
    super(props);
    this.state={
      resetGame:false
    }
  }
  render() {
    return (
    <div className="game">
        <div className="game-board">
          <Board resetGame={this.state.resetGame} clearGame={()=>this.resetProps}/>
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }
}

export default Game;
