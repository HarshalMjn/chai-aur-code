import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter] = useState(0)

 

 // let counter = 6

  const addValue = () => {
    console.log("clicked add", counter);
    //counter = counter + 1;
    {
      if(counter === 20){
         
        setCounter(counter) // If the counter is already 20, do not increment further.
        
        
      }
      else {
        setCounter(counter + 1)  // Increment the counter by 1 if it's less than 20.
      }
    }
    
    
  }

  const removeValue = () => {
    console.log("clicked remove", counter);
    if(counter ===  0){
      setCounter(counter)
    }
    else {
      setCounter( counter -1 )
    }
   
  }
  return (
    <>
     <h1>Chia our code</h1>
     <h2>Counter Value:{counter}</h2>

     <button
     onClick={addValue}>Add value </button>
     <br/>
     <button
     onClick={removeValue}>remove value</button>
     
    </>
  )
}

export default App
