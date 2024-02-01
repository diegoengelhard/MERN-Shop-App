import { useState } from 'react';

// Import React Router DOM
import { Routes, Route } from 'react-router-dom';

// Import pages
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import CartPage from './pages/CartPage/CartPage';

function App() {

  return (
    <>
      {/* HEADER */}
      <header>
        <Navbar />
      </header>

      {/* MAIN */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/*" element={<AuthPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
