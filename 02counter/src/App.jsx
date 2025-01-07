import { useState } from 'react' //hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15) //hooks
  // let counter = 15

  const addvalue = () => {
    console.log("Value Added", counter);
    // counter = counter + 1;
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter=> prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

    // if(counter>19){
    //   console.log('end')
     
    // }else{
    //   setCounter(counter + 1);
    // }
  }

  const removevalue = () => {
    console.log("Value Subtract", counter);
    if(counter>0){
   setCounter(counter - 1)
  }else{
    console.log("no value")
  }
  }
  return (
    <>
     <h1>Be Happy and Healthy</h1>
     <h2>Counter Value :{counter}</h2>
     <button onClick={addvalue}>Add Value</button>
     <br />
     <button onClick = {removevalue}>Remove Value</button>
    </>
  )
}

export default App
