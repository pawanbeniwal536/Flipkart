import React, {useState, useEffect} from 'react'
import './ForLoginPage.css'
import HomeFooter from '../Slider/HomeFooter'
import Navbar2 from '../Navbar2/Navbar2'
import ItemHeader from '../ItemHeader/ItemHeader'
import LoginOTP from '../Login/LoginOTP'

const ForLoginOtp = ({email}) => {
  const [screenWidth ,setScreenWidth]  = useState(false);

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
        <LoginOTP email={email}/>
      </div>
      <div className="login-footer-call mt-9">
        <HomeFooter/>
      </div>
      </div>
   </>

  )
}

export default ForLoginOtp
