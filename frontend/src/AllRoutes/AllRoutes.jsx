import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home.jsx'
import ForLoginPage from '../components/ForLoginPage/ForLoginPage.jsx';
import ForSignUp from '../components/ForSignUp/ForSignUp.jsx';
import LoginOTP from '../components/ForLoginPage/ForLoginOtp.jsx'
import ForSignUpOTP from '../components/ForSignUp/ForSignUpOTP.jsx';
import UserProfile from '../components/UserProfile/UserProfile.jsx';
const AllRoutes = () => {
    const [ email , setEmail ] = useState('Enter your Email')
    const mailChange=(newEmail)=>{
     setEmail(newEmail)
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path ='/home/:id' element={<Home/>} />
                <Route path='/account/login' element={<ForLoginPage mailChange={mailChange}/>} />
                <Route path='/account/signup' element={<ForSignUp  />} />
              <Route path = '/account/login/otp' element={<LoginOTP email={email}/>}/>
              <Route path = '/account/signup/otp' element= {<ForSignUpOTP/>}/>
            <Route path = '/account/:id/user-profile' element = {<UserProfile/>} />
            </Routes>
        </>
    )
}

export default AllRoutes;