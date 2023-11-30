import { useState } from 'react'

import './App.css'
import ListaEjercicios from './templates/ListaEjercicios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaEjercicios/>
    </>
  )
}

export default App
