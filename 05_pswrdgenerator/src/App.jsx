import { useCallback, useState, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(7)
  const [numberallowed, setNumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password,setpassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (charallowed) str += '!@#$%^&*-_+=[]{}`~'

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
    
  }, [length, numberallowed, charallowed, setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
passwordRef.current?.select();
// passwordRef.current?.setSelectionRange(0,5);
window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenerator()
  },[length, numberallowed, charallowed, passwordgenerator])

  return (
    
    <div className='w-full max-w-md mx-auto rounded-lg px-4 py-3 my-10 bg-gray-800 text-pink-500'>
      <h1 className='text-center text-blue-300 mb-2'>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'><input 
      type='text'
      value={password}
      className='w-full outline-none py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className='bg-blue-700 text-white px-2 shrink-0 hover:bg-blue-800'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={5}
          max={60}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> {setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={() => {
              setNumberallowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={charallowed}
          id="characterInput"
          onChange={() => {
              setcharallowed((prev) => !prev);
          }}
      />
      <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
      </div>
    
  )
}

export default App
