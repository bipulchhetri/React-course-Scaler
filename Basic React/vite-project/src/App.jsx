import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './Components/First'
import { Hello } from './Components/Hello'
import Animal from './Components/Animal'
import Book from './Components/Book'
import Event from './Components/Event'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <First name={["green", "blue", "red"]} />
<Hello name="pri" title="chhetri"/>
<Animal/>
<Book/> */}
<Event/>
<Counter/>
    </>
  )
}

export default App
