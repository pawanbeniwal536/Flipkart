import * as api from '../api'

export const signupOTP = ( Email,name,Dob ) => async(dispatch) => {
    dispatch({type:"AUTH_REQUEST"})
    try {
         const { data } = await api.signupOTP({Email,name,Dob})
         dispatch({type:'AUTH',data})
         dispatch({type:"AUTH_RESULT"})
        } catch (error) {
            console.log("Error in frontend in sending a otp ",error)
        }
    }
    
    
    export const loginOTP = ( Email ) => async(dispatch) => {
        dispatch({type:"AUTH_REQUEST"})
    try {
        const { data } = await api.loginOTP({Email});
        dispatch({type:'AUTH',data})
        dispatch({type:"AUTH_RESULT"})
    } catch (error) {
        console.log("Error in frontend in sending the login otp ",error)
    }
}


export const getUser = ( token )=> async(dispatch) => {
    try {
        
        const { data } = await api.getUser({token})
        dispatch({ type:'GET_USER_SUCCESS',payload:data})

        if (data) {
            const userInfo = data?.data;
            localStorage.setItem('Profile', JSON.stringify(userInfo)); 
            window.location.reload()
        }


    } catch (error) {
        console.log("Error in getting the user ",error);
    }
}

export const deleteUser = ( id ) => async(dispatch) => {
    try{
        const { data } = await api.deleteUser(id);
        dispatch({type:'DELETE_USER',payload:data});
    }
    catch(error) {
        console.log("Error in deleting the user is the ",error)
    }
}