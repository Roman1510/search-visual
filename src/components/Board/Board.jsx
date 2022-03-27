import React, { useState, useEffect } from 'react'
import './BoardStyle.css'
import { generateBoard } from '../../helpers/generateBoard'

const Board = ({ size }) => {
  const [drawAvailable, setDrawAvailable] = useState(false)
  const [board, setBoard] = useState([])

  useEffect(() => {
    setBoard(generateBoard(size))
  }, [])

  window.test = () => {
    console.log(board)
  }
  const handleDraw = (idx) => {
    setBoard((prev) => {
      return prev.map((e, i) => {
        if (idx === i) {
          return { index: e.index, isActive: !e.isActive }
        }
        return e
      })
    })
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
      {board.map((e, i) => {
        return (
          <div
            className={`cell ${e.isActive ? 'is-chosen' : ''}`}
            key={i + e}
            onMouseDown={() => {
              setDrawAvailable(true)
              handleDraw(i)
            }}
            onMouseUp={() => {
              setDrawAvailable(false)
            }}
            onMouseEnter={() => {
              if (drawAvailable) {
                handleDraw(i)
              }
            }}
          ></div>
        )
      })}
    </div>
  )
}

export default Board
