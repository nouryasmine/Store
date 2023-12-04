import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom';

function Login() {

    const {user, setUser} = useContext(UserContext);
    const navigation = useNavigate()
  return (
    <section className="login">
        <div className="content">
            
            <div className="login-form">
                <form action="">
                    <input type="name" name="name" id="name" placeholder='Enter you name'/>
                    <input type="text" name="adress" id="adress" placeholder='Enter you adress'/>
                </form>
                <button type="submit" onClick={()=>{
                    setUser(true);
                    navigation(-1);
                }}>BUY</button>
            </div>
        </div>
    </section>
  )
}

export default Login