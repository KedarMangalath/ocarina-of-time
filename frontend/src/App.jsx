import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // We use /api relative path. Vite (local) or Nginx (prod) handles the rest.
    fetch('/api/home/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Fullstack App</h1>
      <p>Backend says: <strong>{message}</strong></p>
    </div>
  )
}

export default App