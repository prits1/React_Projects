
import Login from './components/Login'
import Profile from './components/Profile'
import UCProvider from './context/UCProvider'
import './App.css'

function App() {

  return (
    <UCProvider >
     <h1>React with chai and share is important.</h1>
     <Login />
     <Profile />
    </UCProvider>
  )
}

export default App
