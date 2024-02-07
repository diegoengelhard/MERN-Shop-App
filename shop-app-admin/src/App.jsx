import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/Products/ProductsPage/ProductsPage';
import SingleProduct from './pages/Products/SingleProductPage/SingleProductPage';
import CreateProductPage from './pages/CreateProductPage/CreateProductPage';
import UsersPage from './pages/Users/UsersPage/UsersPage';
import SingleUserPage from './pages/Users/SingleUserPage/SingleUserPage';

// Import components
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';

// Import styles
import './App.css'

function App() {
  const admin = useSelector((state) => state.user.currentUser.user.isAdmin);

  return (
    <>
      {admin && <Topbar />}
      {admin ? (
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:productId" element={<SingleProduct />} />
            <Route path="/product/createProduct" element={<CreateProductPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userId" element={<SingleUserPage />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      )}
    </>
  )
}

export default App
