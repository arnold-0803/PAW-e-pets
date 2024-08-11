import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { CartProvider } from './context/Shopping-Context';
import { Cart } from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Router>
      </CartProvider> 
    </div>
  );
}

export default App;
