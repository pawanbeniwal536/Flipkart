import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginOTP } from '../../action/auth';
import { getUser } from '../../action/auth';
import { loginVerification, resetVerification } from '../../action/authVerification';
import './LoginOTP.css';

const LoginOTP = ({ email }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(15);
  const dispatch = useDispatch();
  const data = useSelector(state => state.verification.data);
  const userData  = useSelector(state => state.auth.user)

  const navigate = useNavigate();


  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp.join("").length === 6 && index === 5) {
        newOtp[5] = "";
        setOtp(newOtp);
        inputRefs.current[5].focus();
      } else if (index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
      } else if (index === 0) {
        newOtp[0] = "";
        setOtp(newOtp);
        inputRefs.current[0].focus();
      }
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const resendCode = () => {
    setTimer(15);
    dispatch(loginOTP(email));
  };

  useEffect(() => {
    const newOtpCopy = otp.join("");
    if (newOtpCopy.length === 6) {
      dispatch(loginVerification(newOtpCopy, email));
    }
  }, [otp, email, dispatch]);

  useEffect(() => {
    if (data) {
      if (data.success) {   
        const token = data?.token  
        dispatch(getUser(token))
        navigate('/')
        dispatch(resetVerification());
      } else {
        alert(data.message || 'An error occurred. Please try again.');
        dispatch(resetVerification()); // Reset verification state on error
      }
    }
  }, [data, navigate, dispatch]);

  useEffect(() => {
    dispatch(resetVerification()); // Reset verification state when component mounts
  }, [dispatch]);

  return (
    <div className="login-big-container flex justify-center">
      <div className="login-container">
        <div className="left-side">
          <div className="login-name-heading text-white">
            <h1>Login</h1>
          </div>
          <div className="login-description">
            <p className='text-gray-300'>Get access to your Orders, Wishlist and Recommendations</p>
          </div>
          <div className="login-bc-image">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="bc image" />
          </div>
        </div>
        <div className="login-otp-container flex items-center w-full">
          <h2 className='w-56 text-black mt-8'>Please Enter the OTP sent to {email}.
            <Link to='/account/login' className='text-blue-600 font-semibold'> Change </Link>
          </h2>
          <div className="otp-fill-input flex gap-2 text-gray-300 font-bold mt-5">
            {otp.map((data, index) => (
              <div key={index} className="otp-input-wrapper">
                <input
                  type="text"
                  maxLength="1"
                  className="otp-input"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
                {data === "" && <div className="placeholder">___</div>}
              </div>
            ))}
          </div>
          <div className="verify-otp-button mt-2 w-full h-12 bg-blue-600 flex items-center justify-center cursor-pointer">
            <Link to='#' className='text-white font-semibold'>Verify</Link>
          </div>
          <div className="code-not-receive">
            <p className='text-gray-400'>
              Not received your code?{" "}
              {timer > 0 ? (
                <span className='text-gray-600 font-extrabold'> 00:{timer < 10 ? '0' + timer : timer}</span>
              ) : (
                <Link className='text-blue-600' onClick={resendCode}>Resend code</Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOTP;
