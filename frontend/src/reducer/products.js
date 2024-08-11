const getProducts = ( state={ data:null },action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, data:action.payload }
    
        default:
            return state;
    }
}

export default getProducts