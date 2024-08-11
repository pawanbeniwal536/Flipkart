// authActions.js
import { loginVerification as loginVerificationAPI } from '../api';
import { signupVerification as signupVerificationAPI } from '../api';

// Define action types
export const LOGIN_VERIFICATION = 'LOGIN_VERIFICATION';
export const RESET_VERIFICATION = 'RESET_VERIFICATION';

// Asynchronous action to verify login
export const loginVerification = (userOTP, email) => async (dispatch) => {
  try {
    const { data } = await loginVerificationAPI({ userOTP, email });
    dispatch({ type: LOGIN_VERIFICATION, payload: data });
  } catch (error) {
    console.log("Error in frontend in login otp verification ", error);
  }
};

// Action to reset verification
export const resetVerification = () => {
  return { type: RESET_VERIFICATION };
};



export const signupVerification = (userOTP)=>async(dispatch) =>{
  
  try {
    dispatch({type:'SIGNUP_REQUEST'})
     const {data} = await signupVerificationAPI({userOTP});
     dispatch({type:'SIGNUP_VERIFICATION',payload:data })
     dispatch({type:'SIGNUP_RESULT'})

  } catch (error) {
    console.log("Error in frontend in signup otp verification ", error);
  }
}