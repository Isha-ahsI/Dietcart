import React from 'react'
import Navbar from './componants/navbar/Navbar'
import Sidebar from './componants/sidebar/Sidebar'
import {  Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Orders/Order'
import { ToastContainer } from 'react-toastify';
  

const App = () => {

  const url="https://dietcart-2.onrender.com"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/order' element={<Order url={url}/>}/>
        </Routes>
        
        
        
      

      </div>
      
    </div>
  )
}

export default App
