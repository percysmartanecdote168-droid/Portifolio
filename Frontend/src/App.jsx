import { useState, useEffect } from 'react' // 1. Added useEffect here
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // 2. This state will store the message from your Node server
  const [backendData, setBackendData] = useState("Connecting to Node.js...")

  // 3. This runs automatically when the page opens
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setBackendData(data))
      .catch(err => setBackendData("Backend is offline ❌"));
  }, []);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>{backendData}</h1> {/* 4. Display the Node.js message here */}
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      {/* ... the rest of your sections stay the same ... */}
      <section id="next-steps">
         {/* (Keep your Documentation and Social sections as they are) */}
      </section>
    </>
  )
}

export default App