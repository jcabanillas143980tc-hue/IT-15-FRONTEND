

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<div className="login-theme"><Login /></div>}
        />
        <Route
          path="/dashboard"
          element={<div className="dashboard-theme"><Dashboard /></div>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
