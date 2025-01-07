import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style = {{backgroundColor:color}}>
        <div className='flex flex-wrap justify-center gap-2.5 px-3 py-2 text-white font-sans hover:font-serif '><br/>DREAM,<br/>BELIEVE,<br/>HUSTLE,<br/>ACHIEVE</div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-2.5 bg-white px-3 py-2 rounded-full'>
            <button
            onClick={() => setColor("red")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          </div>
          <div className='flex flex-wrap justify-center gap-2.5 bg-white px-3 py-2 rounded-full'>
            <button 
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
          </div>
          <div className='flex flex-wrap justify-center gap-2.5 bg-white px-3 py-2 rounded-full'>
            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          </div>
          <div className='flex flex-wrap justify-center gap-2.5 bg-white px-3 py-2 rounded-full'>
            <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          </div>
          <div className='flex flex-wrap justify-center gap-2.5 bg-white px-3 py-2 rounded-full'>
            <button 
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
          </div>
          <div className='flex flex-wrap justify-center gap-2.5 bg-white px-3 py-2 rounded-full'>
            <button 
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
