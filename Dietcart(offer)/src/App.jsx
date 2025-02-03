import React from 'react'
import Navbar from './componants/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Order from './pages/Order/Order'
import Placeorder from './pages/Placeorder/Placeorder'



function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Placeorder' element={<Placeorder/>}/> 
      </Routes>
      
    </div>
  )
}

export default App
