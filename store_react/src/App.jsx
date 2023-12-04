import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import { useState } from 'react'
import { CartContext } from './contexts/CartContext'
import Cart from './pages/Cart'
import { UserContext } from './contexts/UserContext'
import Login from './pages/Login'


function App() {
  const [cart,setCart] = useState([]);
  const [user,setUser] = useState(false);

  return (
    <>
    
    <UserContext.Provider value={{user,setUser}}>
      <CartContext.Provider value={{cart,setCart}}>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
            <Route path='/Cart' element={<Cart/>}/>
           <Route path='/Login' element={<Login/>}/>
        </Routes>
      </CartContext.Provider>
    </UserContext.Provider>
    </>
  )
}

export default App