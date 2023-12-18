import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(15)
  const [final, setfinal] = useState(0)


  const addValue = ()=>{
   setCount(prevCount=> {
    if(prevCount <50){return prevCount +1}
    return prevCount
   })
  }

  const removeValue = () => {
    setCount(prevCount => {
      if(prevCount > 0 ){ return prevCount -1}
      return prevCount
    })
    
  }
  return (
    <div>
    <h1>
      This is first project for basic
      </h1>
      <button onClick={addValue}>Add a number {count}  </button>
      <br/>
     
      <button onClick={removeValue}>Reduce a number {count} </button>
  
      
    </div>
  )
}

export default App
