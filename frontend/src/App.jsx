import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Blog from './pages/Blog/Blog'
import Contactus from './pages/ContactUs/Contactus'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'



 




const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path='/Verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
              
        
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App
