import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';


function ProductList() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const {cart,setCart} = useContext(CartContext);
  const fetchInfo = () => {
    return fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="productList">
      
      {data.map(product => (
        <div key={product.id} className="griditem">
          <img src={product.image} alt={product.title} onClick={() => {navigate(`/ProductDetails/${product.id}`)}}/>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button className="addbutton" onClick={()=> {
               const isInCart = cart.some(item => item.id === product.id);
               !isInCart?
               setCart([...cart,{id:product.id, title: product.title, price: product.price, image: product.image, quantity: 1}])
               :
               setCart(
                 cart.map(item => 
                   item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                 )
               )
                }}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList