import { useState } from 'react';
import { useSelector } from 'react-redux';

// Import React Router DOM
import { Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import CartPage from './pages/CartPage/CartPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';

function App() {
  // Obtain user from redux
  const user = useSelector((state) => state.user.currentUser);

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
          <Route path="/auth/*" element={user ? <Navigate to="/" /> : <AuthPage />} />
          <Route path="/myOrders" element={<OrdersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/products/item/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<SuccessPage />} />
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
