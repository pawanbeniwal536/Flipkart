import React, { useEffect }  from 'react'
import { useState } from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import ItemHeader from '../ItemHeader/ItemHeader';
import './ForLoginPage.css'
import Login from '../Login/Login';
import LoginFooter from '../LoginFooter/LoginFooter';
const  ForLoginPage = ({mailChange}) => {
  const [email, setEmail] = useState("Enter your Email");

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail); 
  };
  useEffect(()=>{
    mailChange(email)
  },[email])

  return (
   <>
   <div className="for-login-page-container">
    <div className="nav2-call">
      <Navbar2/>
      </div>
      <div className="item-header-call">
      <ItemHeader/>
      </div>
      <div className="login-call mt-7">
        <Login onEmailChange={handleEmailChange}/>
      </div>
      <div className="login-footer-call mt-9">
        <LoginFooter/>
      </div>
      </div>
   </>
  )
}

export default  ForLoginPage
