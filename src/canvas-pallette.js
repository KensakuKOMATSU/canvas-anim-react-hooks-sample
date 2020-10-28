import React, { useRef, useEffect } from 'react'

export default function CanvasPallette( props ){
  const { balls } = props
  const cvs = useRef()
  console.log( balls )


  useEffect(() => {
    let reqId

    if( cvs.current ) {
      const ctx = cvs.current.getContext('2d')
      console.log( ctx )


      const animation = () => {
        // console.log( balls )

        if( balls instanceof Array && balls.length > 0 ) {
          ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
          for( let ball of balls) {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, 5, 0, 2 * Math.PI);
            ctx.stroke();
          }

        }
        reqId = requestAnimationFrame( animation )
      }

      animation()
    }

    return function() {
      if( reqId ) {
        cancelAnimationFrame( reqId )
      }
    }
  }, [balls])


  return (
    <canvas ref={ e => cvs.current = e }  width={320} height={240}/>
  )
}
