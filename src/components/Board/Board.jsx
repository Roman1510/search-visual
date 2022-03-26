import React, { useState } from 'react'
import './BoardStyle.css'

const Board = ({ size }) => {
  const [positions, setPositions] = useState([])
  const [drawAvailable, setDrawAvailable] = useState(false)

  const handleDraw = (idx) => {
    console.log(idx)
  }
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
        return (
          <div
            className="cell"
            key={_i}
            onMouseDown={() => {
              setDrawAvailable(true)
              handleDraw(_i)
            }}
            onMouseUp={() => {
              setDrawAvailable(false)
            }}
            onMouseEnter={() => {
              if (drawAvailable) {
                handleDraw(_i)
              }
            }}
          ></div>
        )
      })}
    </div>
  )
}

export default Board
