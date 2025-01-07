import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "prits",
    age: 20
  }
  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-rose-600 text-gray-950 p-3 font-serif rounded-lg'> Tailwind CSS </h1>
      {/* <Card channel ="be concentrate" someObje={myobj}/> */}
      {/* <Card channel = "chai aur code " someObje={myArr}/> */}
      <Card username = "chaipe charcha" btnText = "Visit Me"/>
      <Card username = "Techworld"/>
    </>
  )
}

export default App
