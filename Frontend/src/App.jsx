import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Header from './components/Header/Header'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/placeorder' element={<PlaceOrder/>} />
      </Routes>
      
    </div>
  )
}

export default App
