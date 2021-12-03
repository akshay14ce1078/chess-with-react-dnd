import React from 'react';
import { Knight } from "./Knight";
import { Square } from "./Square";
import { canKnightMove, moveKnight} from '../game-state'


function handleSquareClick (xPos, yPos){
  if(canKnightMove(xPos,yPos)){
    moveKnight(xPos, yPos);
  }
}

function renderSquare (squareNumber,[knightX,knightY]) {
  const x = squareNumber % 8;
  const y = Math.floor( squareNumber / 8);

  const isknightInCurrentSquare = x === knightX && y === knightY;
  const piece = isknightInCurrentSquare ? <Knight/> : null;
  const isBlack = (x+y) % 2 === 1; 

  return (
    <div key={squareNumber} onClick={()=>handleSquareClick(x,y)} style={{width:'12.5%', height:'12.5%'}}>
      <Square black={isBlack}>{piece}</Square>
    </div>
  );

}

export const Board = ({knightPosition}) => {
  const squares=[];
  for(let i=0 ; i<64 ; i++){
    squares.push(renderSquare(i, knightPosition))
  }
  return (
    <div style={{ width: '100%', height:600, display: 'flex', flexWrap: 'wrap'}}>
      {squares}
    </div>
  )
}