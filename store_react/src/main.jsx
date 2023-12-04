import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/

<Router>
<App />
  
  </Router>,  

)
