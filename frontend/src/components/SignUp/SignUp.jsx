import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupOTP } from '../../action/auth';
import './SignUp.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SignUp = () => {
  
  const [email, setEmail] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [username , setUsername] = useState('');
  const navigate = useNavigate();
   
  const user = localStorage.getItem('Profile')


  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  const minDate = new Date('1960-01-01');


  const dispatch = useDispatch();

  const data = useSelector(state => state.auth.data);
  const loading = useSelector(state => state.auth.loading);


  // Function to validate the email address
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Function to handle OTP request
  const handleRequestOTP = () => {
    if (validateEmail(email)) {
      dispatch(signupOTP(email,username,selectedDate));
      setOtpRequested(true);
      setEmail(''); // Clear the email input immediately after dispatching the OTP request
    } else {
      alert('Please enter a valid email');
    }
  };

  useEffect(() => {
    if (otpRequested && data) {
      if (data.success) {
        if(user){
          alert("You are already logged in")
          navigate('/')
        }
        alert('Successfully sent OTP to your email');
        navigate('/account/signup/otp');
      } else {
        alert(data.message || 'User already exists with this account');
      }
      setOtpRequested(false); // Reset the OTP request flag
      // Reset the data state to avoid showing stale data
      dispatch({ type: 'RESET_AUTH_DATA' });
    }
  }, [data, otpRequested, navigate, dispatch]);

  return (
    <>
      {loading ? (
        <div className="loading-auth-container flex justify-center h-80 items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="signup-big-container flex justify-center">
          <div className="signup-container">
            <div className="left-side">
              <div className="signup-name-heading text-white">
                <h1>Looks Like you're new here!</h1>
              </div>
              <div className="signup-description">
                <p className="text-gray-300">Sign up with your email to get started</p>
              </div>
              <div className="signup-bc-image">
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="bc image" />
              </div>
            </div>

            <div className="right-side flex justify-between flex-col ">
              <div className="right-side-content mt-16">
                <div className="signup-username flex">
                  <p>Username:</p>
                  <input type="text" placeholder='Enter Username' className='ml-2' onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div className="signup-user-dob mt-3">
                  <label htmlFor="dob">DOB:</label>
                  <DatePicker
                    selected={selectedDate}
                    className='signup-datepicker'
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={minDate}
                    maxDate={eighteenYearsAgo}
                    showYearDropdown
                    scrollableYearDropdown
                    placeholderText="Select a DOB"
                  />
                </div>
                <div className="signup-input mt-3 flex ">
                  <p>Email:</p>
                  <input
                    type="text"
                    className='ml-2'
                    placeholder="Enter Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                  />
                </div>
                <div className="signup-input-desc">
                  <span className="span-signup-cls flex">
                    By continuing, you agree to Flipkart's
                    <p className="pl-1 pr-1 signup-terms-text"> Terms of Use </p>
                    and <p className="pl-1 policy-terms-text"> Privacy Policy. </p>
                  </span>
                </div>
                <div className="signup-page-otp flex justify-center mt-8 h-12 cursor-pointer" onClick={handleRequestOTP}>
                  <h1>CONTINUE</h1>
                </div>
                <Link to="/account/login" className="exist-user-cls flex justify-center mt-6 h-12 text-blue-600 items-center">
                  Existing User? Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
