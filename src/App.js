import React from 'react';
import './styles/app.scss';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Home from "./components/Home"
import Header from './components/Header';
import Cart from './components/Cart';
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App