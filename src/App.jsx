import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './views/Home'
import Selection from './views/Selection'
import Navbar from './component/navbar'
import Recomendation from './views/Recomendation'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Selection />
      {/* <Recomendation /> */}
    </>
  )
}

export default App
