import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import MainPage from './pages/MainPage.jsx';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer.jsx';
import SalesPage from './pages/SalesPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/categoriesPage" element={<CategoriesPage/>}/>
              <Route path="/products" element={<ProductsPage/>}/>
              <Route path="/products/:category" element={<ProductsPage />}/>
              <Route path="/product/:id" element={<ProductPage/>}/>
              <Route path="/all-sales" element={<SalesPage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;