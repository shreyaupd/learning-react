import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='bg-green-300 text-black rounded-xl p-5'>This is tailwind</h1>
   <Card/>
   <Card titles={"new lorem"}/>
   <Card titles={"more lorem"}/>
   <Card/>
   </>
  )
}

export default App
