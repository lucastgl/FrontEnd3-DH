import { useState } from 'react'
import './App.css'
import ComponentFunction from './components/ComponentFunction'
import ClassFunction from './components/ComponentClass'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <ComponentFunction/>
        <ClassFunction value={0}/>
      </div>
    </div>
  )
}

export default App
