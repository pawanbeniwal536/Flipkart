import React, { useEffect }  from 'react'
import { useState } from 'react';
import Navbar2 from '../Navbar2/Navbar2';
import ItemHeader from '../ItemHeader/ItemHeader';
import './ForLoginPage.css'
import Login from '../Login/Login';
import HomeFooter from '../Slider/HomeFooter'

const  ForLoginPage = ({mailChange}) => {
  const [email, setEmail] = useState("Enter your Email");

  const [screenWidth ,setScreenWidth]  = useState(false);

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail); 
  };
  useEffect(()=>{
    mailChange(email)
  },[email])

  useEffect(()=>{

    const handleResize = () => {
      console.log("window size is the ",window.innerWidth)
      if (window.innerWidth>800) {
        setScreenWidth(false)
      }
      else{
        setScreenWidth(true)
      }
    }

    window.addEventListener('resize',handleResize);

    handleResize()
   
    window.removeEventListener('resize',handleResize)

  },[])

  return (
   <>
   <div className="for-login-page-container">
    <div className="nav2-call">
      <Navbar2/>
      </div>
      {
        screenWidth?'':(
      <div className="item-header-call">
      <ItemHeader/>
      </div>)
      }
      <div className="login-call mt-7">
        <Login onEmailChange={handleEmailChange}/>
      </div>
      <div className="login-footer-call mt-9">
        <HomeFooter/>
      </div>
      </div>
   </>
  )
}

export default  ForLoginPage
