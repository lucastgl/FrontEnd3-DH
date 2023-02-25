import { useState } from 'react'
import './styles/App.css'
import TypesOfPokemons from './Types'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>Pokedex</h1>
        <TypesOfPokemons/>
    </div>
  )
}

export default App
