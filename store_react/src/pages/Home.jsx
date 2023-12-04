import {React} from 'react'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
/*import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';*/


function Home() {
  return (
    <div className='Home'> 
    <NavBar/>
       <ProductList/>
        
    </div>
  )
}

export default Home