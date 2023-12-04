import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { cart_icon } from '../assets'
import { CartContext } from '../contexts/CartContext'


function NavBar() {
    const {cart,setCart} = useContext(CartContext);
    const navigate = useNavigate();
    

   
  return (
    <div className='NavBar'>
      <nav className='navigation'>
            <ul>
                <li onClick={()=>navigate("/")}>HOME</li>
                <li>CONTACT</li>
                <li>MEN</li>
                <li>WOMEN</li>
                <div className='cart' onClick={()=>navigate("/Cart")}>
                      <img src={cart_icon} alt="" />
                      <div className='cartnumitems'>{cart.length}</div>
                </div>
            </ul>
        </nav>

    </div>
  )
}
export default NavBar


