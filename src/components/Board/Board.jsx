import React from 'react'
import Cell from '../Cell/Cell'

const Board = ({ size }) => {
  return (
    <div>
      {[...Array(size)].map((e, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}

export default Board
