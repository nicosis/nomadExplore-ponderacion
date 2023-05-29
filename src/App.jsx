import { useState } from 'react'
import Selection from './views/Selection'
import Navbar from './component/navbar'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Selection />
    </>
  )
}

export default App
