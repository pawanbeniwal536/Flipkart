import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginOTP } from '../../action/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({onEmailChange}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [placeholder, setPlaceholder] = useState('Enter Email Address');
  const [email, setEmail] = useState( '');
  const [otpRequested, setOtpRequested] = useState(false); 
  const navigate = useNavigate();

  const user = localStorage.getItem('Profile')
  if(user){
     alert("already logged in ")
     navigate('/')
  }


  const dispatch = useDispatch();
  const data = useSelector(state => state.auth.data);
  const loading = useSelector(state => state.auth.loading);
  const handleClick = () => {
    setIsClicked(true);
    setPlaceholder('');
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRequestOTP = () => {
    if (validateEmail(email)) {
      dispatch(loginOTP(email));
      setOtpRequested(true); // Set the flag to true after requesting OTP
      onEmailChange(email)
    } else {
      alert('Please enter a valid email');
    }
  };

  useEffect(() => {
    if (otpRequested && data) { // Check if OTP was requested
      if (data.success) {
        if(user){
          alert("You are already logged in")
          navigate('/')
        }
        alert('Successfully sent OTP to your email');
        setEmail('');
        navigate('/account/login/otp');
      } else {
        alert('Invalid credentials');
      }
      setOtpRequested(false); // Reset the flag
      dispatch({ type: 'RESET_AUTH_DATA' });
    }
  }, [data, otpRequested, navigate]);



  return (
    <>
      {loading ? (
        <div className="loading-auth-container flex justify-center h-80 items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="login-big-container flex justify-center">
          <div className="login-container">
            <div className="left-side">
              <div className="login-name-heading text-white">
                <h1>Login</h1>
              </div>
              <div className="login-description">
                <p className="text-gray-300">
                  Get access to your Orders, Wishlist and Recommendations
                </p>
              </div>
              <div className="login-bc-image">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  alt="bc image"
                />
              </div>
            </div>

            <div className="right-side flex justify-between flex-col">
              <div className="right-side-content">
                <div className="login-input">
                  <p className={isClicked ? 'clicked-input' : 'default-input'}>
                    Enter Email Address
                  </p>
                  <input
                    type="text"
                    placeholder={placeholder}
                    onClick={handleClick}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="login-input-desc">
                  <span className="span-login-cls flex">
                    By continuing, you agree to Flipkart's
                    <p className="pl-1 pr-1 login-terms-text"> Terms of Use </p>
                    and
                    <p className="pl-1 policy-terms-text"> Privacy Policy. </p>
                  </span>
                </div>

                <div
                  className="login-page-otp flex justify-center mt-12 h-12 cursor-pointer"
                  onClick={handleRequestOTP}
                >
                  <h1>Request OTP</h1>
                </div>
              </div>
              <div className="login-bottom flex justify-center">
                <Link to="/account/signup">New to Flipkart? Create an account</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;