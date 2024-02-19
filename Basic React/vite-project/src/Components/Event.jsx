import React from 'react'

const Event = () => {
    function say(){
        console.log("YOYO")
    }
  return (
    <div>
        <button onClick={say}>Click Me to Say YOYO</button>
    </div>
  )
}

export default Event