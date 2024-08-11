import React from 'react'
import Navbar2 from '../Navbar2/Navbar2'
import ItemHeader from '../ItemHeader/ItemHeader'
import LoginFooter from '../LoginFooter/LoginFooter'
import SignUpOTP from '../SignUp/SignUpOTP'
const ForSignUpOTP = () => {
  return (
    <>
<div className="for-signup-page-container">
        <div className="nav2-call">
          <Navbar2 />
        </div>
        <div className="item-header-call">
          <ItemHeader />
        </div>
        <div className="signup-call mt-7">
          <SignUpOTP/>
        </div>
        <div className="signup-footer-call mt-9">
          <LoginFooter />
        </div>
      </div>
    </>
  )
}

export default ForSignUpOTP
