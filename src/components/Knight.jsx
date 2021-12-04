import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../drag-drop/ItemTypes";

export const Knight = () => {

  const [{isDragging},dragRef] = useDrag(() => ({
      type: ItemTypes.KNIGHT,
      collect: monitor => ({
        isDragging: monitor.isDragging()
      })
    })
  );

  return (
    <span ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
      }}>
      ♘
    </span>
  );
}