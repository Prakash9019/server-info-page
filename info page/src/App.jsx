import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ServerHeader } from './Components/ServerHeader'
import ServerInfo from './Components/Serverinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ServerInfo/>
  )
}

export default App
