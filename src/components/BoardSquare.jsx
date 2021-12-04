import React from 'react';
import { useDrop } from "react-dnd";
import { ItemTypes } from "../drag-drop/ItemTypes";
import { canKnightMove, moveKnight } from "../game-state";
import { Square } from "./Square"

export const BoardSquare = ({x,y,children}) => {
  const isBlack = (x+y) % 2 === 1; 

  const [{ isOver, canDrop }, dropRef] = useDrop(() => ({
    accept: ItemTypes.KNIGHT,
    canDrop: ()=> canKnightMove(x, y),
    drop: () => moveKnight(x, y),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    }),
  }), [x, y])

  return (
    <div
      ref={dropRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={isBlack}>{children}</Square>
      {isOver && canDrop && <Overlay color="green" />}
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
    </div>
  )
}

const Overlay = ({color}) => {
  return <div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.5,
    backgroundColor: color,
  }}
/>
}