import React, { useState, useEffect } from 'react';
import CanvasPallette from './canvas-pallette'
import Ball from './libs/ball'

function App() {
  const [balls, setBalls] = useState([])


  useEffect(() => {
    if( balls ) {
      window.onkeydown = e => {
        let dx = 0, dy = 0
        switch(e.keyCode) {
        case 37:
          dx = -1
          break;
        case 38:
          dy = -1
          break;
        case 39:
          dx = 1
          break;
        case 40:
          dy = 1
          break;
        default:
          break;
        }

        for( let ball of balls  ) {
          ball.x += dx
          ball.y += dy
        }
      }
    }
  }, [balls])

  useEffect(() => {
    const _balls = []
    for( let i = 0; i < 3; i++ ) {
      const x = Math.floor(Math.random() * 160)
      const y = Math.floor(Math.random() * 80)
      const ball = new Ball( {x, y} )
      _balls.push( ball )
    }
    setBalls(_balls)
  }, [])

  return (
    <div>
      <CanvasPallette balls={balls} />
    </div>
  );
}

export default App;
