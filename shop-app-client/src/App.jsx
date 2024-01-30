import { useState } from 'react';

// Import pages
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <>
      {/* HEADER */}
      <Navbar />
      
      {/* MAIN */}
      <HomePage />
    </>
  )
}

export default App
