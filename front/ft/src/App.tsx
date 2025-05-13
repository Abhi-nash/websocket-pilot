import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handle(){
    setCount(cn=>cn+1);
  }
  return (
    <div>
      <h1>Hiiiii {count}</h1>
      <button onClick={handle}>Click me</button>
      
    </div>
    
  )
}

export default App
