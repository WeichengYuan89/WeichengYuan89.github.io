import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>YUANWEICHENG</h1>
      <div className="card">
        <p>
          袁炜程
        </p>
      </div>
      <p className="read-the-docs">
        yuanweicheng
      </p>
    </>
  )
}

export default App
