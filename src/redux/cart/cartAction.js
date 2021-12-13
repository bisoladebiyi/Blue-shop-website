import { ADD_TO_CART } from "./cartType"

const addToCart = cartData => {
    return {
        type: ADD_TO_CART,
        payload: cartData
    }   
}

export default addToCart