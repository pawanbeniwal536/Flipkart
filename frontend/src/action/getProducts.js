import * as api from '../api'

const getProducts = () => async(dispatch) => {
 try {
    const data = await api.getProducts();
    dispatch({type:"GET_PRODUCTS",payload:data})
 } catch (error) { 
 }

}

export default getProducts