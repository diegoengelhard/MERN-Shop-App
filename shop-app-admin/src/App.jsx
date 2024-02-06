import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
