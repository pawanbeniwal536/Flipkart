const authReducer = (state = { data: null, loading: false }, action) => {
    switch (action.type) {
        case 'AUTH_REQUEST':
            return { ...state, loading: true }
        case 'AUTH':
            return { ...state, data: action?.data }

        case 'AUTH_RESULT':
            return { ...state, loading: false }

        case 'RESET_AUTH_DATA': // Add this case to handle resetting the auth data
            return { ...state, data: null, error: null };

        case 'LOGIN_VERIFICATION':
            return { ...state, user: action?.data }

        case 'GET_USER_SUCCESS':
            return { ...state , user:action.payload }

        case 'DELETE_USER':
            return { ...state ,data:action.payload}
        default:
            return state;
    }
}

export default authReducer;