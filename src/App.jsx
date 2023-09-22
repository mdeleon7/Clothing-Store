import React, { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Nav, Home, Women, Men, About, Checkout, Item, Search} from './components'
import cards from './components/functions/cards';

function App() {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([
    {
      brand: [],
    },
    {
      type: [],
    },
    {
      color: [],
    },
  ]);

  return (
      <Router>
        <div className='App'>
          <Nav cart={cart}/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/women" element={<Women cards={cards} categories={categories} setCategories={setCategories}/>} />
            <Route exact path="/men" element={<Men cards={cards} categories={categories} setCategories={setCategories}/>} />
            <Route exact path='/about' element={<About />}/>
            <Route exact path='/checkout' element={<Checkout cart={cart} setCart={setCart}/>}/>
            <Route path='shop/item/:title' element={<Item cards={cards} cart={cart} setCart={setCart}/>}/>
            <Route exact path='/search' element={<Search cards={cards} />}/>
          </Routes>
        </div>
      </Router>
  )
}

export default App
