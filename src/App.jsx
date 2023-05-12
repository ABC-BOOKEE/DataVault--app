import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Upload from './components/Upload';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App