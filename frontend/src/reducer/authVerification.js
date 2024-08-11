// authVerificationReducer.js
const initialState = {
  data: null,
  loading: false,
};

const authVerification = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_VERIFICATION':
      return { ...state, data: action.payload };
    case 'RESET_VERIFICATION':
      return initialState;
    case 'SIGNUP_VERIFICATION':
      return { ...state, data: action.payload }
    case "SIGNUP_REQUEST":
      return { ...state, loading: true }
    case "SIGNUP_RESULT":
      return { ...state, loading: false }

    default:
      return state;
  }
};

export default authVerification;
