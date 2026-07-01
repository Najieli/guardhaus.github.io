import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/getting-started" element={<GettingStarted />} />
    </Routes>
  )
}

export default App