import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext';
import {  useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { cart_icon } from '../assets'

function Cart() {
    const {cart,setCart} = useContext(CartContext);
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [total,setTotal] = useState(0);
    console.log(cart);

    useEffect(() => {
        const sumTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(sumTotal);
    },[cart]);
    
    const CartGrid = ({ products }) => (
        <div className="cartdisplay">
          {products.map((product) => (
            <div key={product.id} className="productItem">
              <img src={product.image} alt={product.title} />
              <h3>{product.title} (x{product.quantity})</h3>
              <p>{product.price*product.quantity} $</p>
              <button onClick={()=>{
                setCart(cart.filter(item => item.id != product.id))
                }}>Remove from cart</button>
            </div>
          ))}
        </div>
      );

  return (
   
   <section className='cartSection'>
  
      <nav className='CartNav'>
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
       
{cart.length > 0 ? (
        <CartGrid products={cart} />
      ) : (
        <div className="empty-cart">
        
        </div>
       
      )}
      <h1 className="totalPrice">
        {total>0 ? "Total : "+total+" $" : "Your cart is empty !"}
      </h1>
      {total>0 ?
      <button className='Checkout' onClick={()=>{
        user?( alert("Checkout succeeded") , setCart([])) : navigate('/Login')
      }}>Check out</button>
    : <></>}
    
        
      
   </section>
  
  )
}

export default Cart