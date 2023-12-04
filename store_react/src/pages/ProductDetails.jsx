import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { cart_icon } from '../assets'
function ProductDetails() {

    const param = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const {cart,setCart} = useContext(CartContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+param.id).then(response => {
                return response.json()
            })
            .then(data => {
                setProduct(data)
            })
            }, []);

            console.log(product);


  return (
    <section className='productD'>
       <nav className='ProductNav'>
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
        <div className="productdetails">
          <div className="productimg">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="details">
            <div className='detailsgroup'>
              <h3 className='title'>{product.title}</h3>
              <p className='description'>{product.description}</p>
              <div className="editquantity">
              <button onClick={()=>{
                  quantity>1 ? 
                  setQuantity(quantity-1)
                  :setQuantity(1)
                  }}>-</button>
                <p> {quantity} </p>
                
                  <button onClick={()=>setQuantity(quantity+1)}>+</button>
              </div>
              <p className='price'>{quantity>0 ? product.price*quantity : product.price} $</p>
            </div>
              
              <button onClick={()=> {
               const isInCart = cart.some(item => item.id === product.id);
               !isInCart?
               setCart([...cart,{id:product.id, title: product.title, price: product.price, image: product.image, quantity: quantity}])
               :
               setCart(
                 cart.map(item => 
                   item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                 )
               )
                }}>Add to cart</button>
          </div>
      </div>
    </section>


    
  )
}

export default ProductDetails