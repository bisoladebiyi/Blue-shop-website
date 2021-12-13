import { ADD_TO_CART, CLEAR_CART, DECREASE_AMOUNT, INCREASE_AMOUNT, REMOVE_FROM_CART, TOTAL_PRICE } from "./cartType"

const initialState = {
    data : [],
    cartCount: 0,
    totalPrice: 0,
}



const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART: return {
            ...state,
            data: [...state.data, action.payload],
            cartCount: state.data.length,       
        }
        case REMOVE_FROM_CART: return {
            ...state,
            data: state.data.filter((data)=> data.id !== action.payload),
            cartCount: state.data.length,  
        }
        case CLEAR_CART: return {
            ...state,
            data: [],
            cartCount: 0,    
            totalPrice: 0    
        }
        case INCREASE_AMOUNT: 
        return {
            ...state,
            data: state.data.map((item) => {
                if(item.id === action.payload){
                  item.value++
                  return item
                }else {
                    return item
                }
            }),
            cartCount: state.data.length,  
        }
        case DECREASE_AMOUNT: 
        return {
            ...state,
            data: state.data.map((item) => {
                if(item.id === action.payload){
                    item.value--
                    return item
                }else {
                    return item
                }
            }),
            cartCount: state.data.length,  
        }
            
        case TOTAL_PRICE: 
        let arr =  state.data.map((data)=> data.products.price * data.value)
        arr = [0,...arr]
        let total = 0;
        if(arr === []){
          return total
        } else {
             total = arr.reduce((first, last)=> {
                return first + last
            })
        }
        return {
            ...state,    
            totalPrice: total   
        }
        default: return state
    }
}

export default reducer 