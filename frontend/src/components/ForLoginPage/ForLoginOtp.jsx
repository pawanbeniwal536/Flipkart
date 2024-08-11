import React from 'react'
import './ForLoginPage.css'
import LoginFooter from '../LoginFooter/LoginFooter'
import Navbar2 from '../Navbar2/Navbar2'
import ItemHeader from '../ItemHeader/ItemHeader'
import LoginOTP from '../Login/LoginOTP'
const ForLoginOtp = ({email}) => {
  
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
        <LoginOTP email={email}/>
      </div>
      <div className="login-footer-call mt-9">
        <LoginFooter/>
      </div>
      </div>
   </>

  )
}

export default ForLoginOtp
