import React from 'react';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Knight } from "./Knight";
import { BoardSquare } from './BoardSquare';

function renderSquare (squareNumber,[knightX,knightY]) {
  const x = squareNumber % 8;
  const y = Math.floor( squareNumber / 8);

  const isknightInCurrentSquare = x === knightX && y === knightY;
  const piece = isknightInCurrentSquare ? <Knight/> : null;
  
  return (
    <div key={squareNumber} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {piece}
      </BoardSquare> 
    </div>
  );
}



export const Board = ({knightPosition}) => {
  const squares=[];
  for(let i=0 ; i<64 ; i++){
    squares.push(renderSquare(i, knightPosition))
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ width: '100%', height:600, display: 'flex', flexWrap: 'wrap'}}>
        {squares}
      </div>
    </DndProvider>
  )
}