import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
    <h1>Let's learn about react toolkit</h1>
    <Addtodo />
    <Todos />
    </>
  )
}

export default App
