import React from 'react'
import './BoardStyle.css'

const Board = ({ size }) => {
  return (
    <div
      className="board"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        flexBasis: `${size}px`,
      }}
    >
      {[...Array((size * size) / 400)].map((_e, _i) => {
        return <div className="cell" key={_i}></div>
      })}
    </div>
  )
}

export default Board
