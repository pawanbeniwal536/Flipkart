import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './SignUpOTP.css'
import { resetVerification, signupVerification } from '../../action/authVerification';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../action/auth';


const SignUpOTP = () => {

  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const navigate = useNavigate()
  

// function for change and set the otp 
const handleChange = (e) => {
 const value = e.target.value;
 if(value.length <= 6){
  setOtp(value)
 }
 else{
  alert("Enter a correct otp ")
 }
}


const loading = useSelector((state)=> state.verification.loading);
const data = useSelector((state)=> state.verification.data);
const userData = useSelector(state=> state.auth.user)


// function for the submit the otp for fetch the data from the api 
  const handleSubmit = () => {
      dispatch(signupVerification(otp))

     console.log("data is the frontend",data)
  }
  
useEffect(()=>{
  if(data?.success){
     alert("Successfully created your account ")
     if(data?.token){
       const token = data.token;
       dispatch(getUser(token))
       navigate('/')
      }
      else{
        alert("User cannot enter without a credentials")
      }
      dispatch(resetVerification())
  }
},[data])

  return (
    <>
    {
      loading?'Loading':
      (
      <div className="signup-big-container flex justify-center">
        <div className="signup-container">
          <div className="left-side ">
            <div className="signup-name-heading text-white "><h1>Looks Like you're new here!</h1></div>
            <div className="signup-description"><p className='text-gray-300'>Sign up with your mobile number to get started</p></div>
            <div className="signup-bc-image">
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="bc image" />
            </div>
          </div>

          <div className="right-side flex justify-between flex-col ">
            <div className="right-side-content">

              <div className="signup-otp-field w-full flex justify-between mt-10">
                <p>OTP sent to Mobile</p>
                <Link to='/account/signup' className='font-semibold text-blue-600'>Resend?</Link>
              </div>

              <div className="signup-submit-otp mt-10">
                <input type="text" placeholder='Enter OTP' onChange={handleChange} value={otp} /></div>
              <Link to='/account/signup/otp' className="signup-page-otp flex justify-center mt-8 h-12 cursor-pointer"><h1 onClick={handleSubmit}>SIGNUP</h1></Link>
              <Link to='/account/login' className='exist-user-cls flex justify-center mt-6 h-12 text-blue-600 items-center'>Existing User? Log in</Link>
            </div>

          </div>
        </div>
      </div>
      )
}
    </>
  )
}

export default SignUpOTP
