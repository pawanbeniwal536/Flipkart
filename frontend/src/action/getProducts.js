import * as api from '../api'

const getProducts = () => async(dispatch) => {
 try {
    const data = await api.getProducts();
    dispatch({type:"GET_PRODUCTS",payload:data})
 } catch (error) { 
    console.log("Error in getting the list of all products , ",error)
 }

}

export default getProducts