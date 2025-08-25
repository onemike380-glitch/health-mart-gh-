import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="container">
        <h1>Health Mart GH</h1>
        <p className="subtitle">Modern online healthcare platform for Ghana</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        
        <div className="features">
          <h2>Features Coming Soon:</h2>
          <ul>
            <li>Direct medication sales from healthcare facilities</li>
            <li>Secure user authentication and patient management</li>
            <li>Easy shopping and checkout with persistent cart</li>
            <li>Seamless backend integration via Supabase</li>
            <li>Responsive, accessible UI using shadcn-ui and Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
