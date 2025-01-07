import { useState } from 'react'
import Header from './componenets/header/header'
import './App.css'
import Footer from './componenets/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      { <Outlet /> /*nesting possible*/}
      <Footer />
    </>
  )
}

export default App
