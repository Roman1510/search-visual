import React from 'react'
import './BoardStyle.css'

const Board = ({ size }) => {
  return <canvas id="canvas" height={size + 'px'} width={size + 'px'}></canvas>
}

export default Board
