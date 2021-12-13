import { ADD_TO_CART, CLEAR_CART, DECREASE_AMOUNT, INCREASE_AMOUNT, REMOVE_FROM_CART, TOTAL_PRICE } from "./cartType"

export const addToCart = cartData => {
    return {
        type: ADD_TO_CART,
        payload: cartData
    }   
}

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}
export const getTotal = () => {
    return {
        type: TOTAL_PRICE
    }
}
export const increaseAmount = id => {
    return {
        type: INCREASE_AMOUNT,
        payload: id
    }
}
export const decreaseAmount = id => {
    return {
        type: DECREASE_AMOUNT,
        payload: id
    }
}