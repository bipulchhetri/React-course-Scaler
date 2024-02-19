import React,{useState}from 'react'

const Counter = () => {
const [count,setCount]=useState(0);
const [factor,setfactor]=useState(1);
function increment()
{
    setCount(count+factor);
}
function decrement()
{
    setCount(count-factor);
}
function incrementfactor(){
    setfactor(factor+1);
}
function decrementfactor(){
    setfactor(factor+1);
}
  return (
 <>
 <h1>This is My count : {count}</h1>
 <button onClick={increment}>Increment</button>
 <button onClick={decrement}>Decrement</button>
 <h1>This is My Factor : {factor}</h1>
 <button onClick={incrementfactor}>Increment</button>
 <button onClick={decrementfactor}>Decrement</button>
</>
  )
}

export default Counter