import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [rotation, setRotation] = useState(0)

  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    console.log('RENDERED')
    console.log({ rotation })
    setTimeout(() => {
      setSeconds((seconds) => seconds + 1)
      const interval = setInterval(() => {
        setRotation((rotation) => {
          if (rotation >= 360) {
            return 0
          }
          return rotation + 6
        })
      }, 1000)
      return () => clearInterval(interval)
    }, 1000)
  }, [seconds])

  return (
    <div className="App">
      <span className="seconds" style={{ transform: `rotate(${rotation}deg)` }}>
        <img src="hour.png" />
      </span>
    </div>
  )
}

export default App
