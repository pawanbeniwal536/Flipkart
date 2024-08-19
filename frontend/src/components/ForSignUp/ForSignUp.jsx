import React , { useState , useEffect } from 'react'
import Navbar2 from '../Navbar2/Navbar2'
import ItemHeader from '../ItemHeader/ItemHeader'
import SignUp from '../SignUp/SignUp'
import HomeFooter from '../Slider/HomeFooter'
const ForSignUp = () => {

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
      <div className="for-signup-page-container">
        <div className="nav2-call">
          <Navbar2 />
        </div>
        {
        screenWidth?'':(
      <div className="item-header-call">
      <ItemHeader/>
      </div>)
      }
        <div className="signup-call mt-7">
          <SignUp/>
        </div>
        <div className="signup-footer-call mt-9">
          <HomeFooter/>
        </div>
      </div>
    </>
  )
}

export default ForSignUp
