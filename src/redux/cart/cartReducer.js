import { ADD_TO_CART } from "./cartType"

const initialState = {
    data : [],
    cartCount: 0,
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: return {
            ...state,
            data: [...state.data, action.payload],
            cartCount: state.data.length,
            totalPrice: state.totalPrice + (state.data.price * state.data.value)
        }
        default: return state
    }
}

export default reducer 