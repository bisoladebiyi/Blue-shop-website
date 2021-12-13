import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Navbar from "../components/navbar";
import { clearCart, decreaseAmount, getTotal, increaseAmount, removeFromCart } from "../redux/cart/cartAction";

const Cart = (props) => {
  const { data, total, increase, decrease, clear } = props;
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getTotal())
  },[dispatch, data])

  return (
    <div className="h-full">
      <Navbar />
      <div className="h-full w-full grid place-items-center">
        <div className="h-auto w-full p-8 md:w-5/6 md:p-10 bg-gray-100 rounded text-center" >
          { data === [] ? <p>No item in cart!</p> : data.map(({ value, products, id }) => {
  
            return (
              <div className="flex flex-col sm:flex-row justify-between sm:mb-14 border-b sm:border-b-0 py-10 sm:p-0">
                <div className="sm:w-1/3 md:w-1/2">
                  <p className="font-bold text-gray-700 mb-5 text-xs hidden sm:flex">PRODUCT DETAILS</p>
                  <div className="flex justify-between">
                  <img
                    className="w-20 h-24 md:w-28 md:h-36 lg:w-36 lg:h-44 rounded-md"
                    src={products.image}
                    alt=""
                  />
                  <div className="w-1/2 ml-10 text-gray-500 font-medium text-xs sm:text-sm text-left">
                    <p>{products.title}</p>
                    <p className="mt-5 text-gray-700">${products.price}</p>
                  
                  </div>
                </div>
                </div>
                

                <div className="flex sm:w-1/3 justify-between mt-6">
                  <div className="h-8 w-auto">
                    <p className="font-bold text-gray-700 mb-5 text-xs text-center">QTY</p>
                    <div className="flex h-full ml-2">
                      <input
                        className="bg-white border-none px-1 w-8 h-full rounded-l-sm focus:outline-none text-sm"
                        type="text"
                        value={value}
                      />
                      <div className="flex flex-col rounded-r-sm overflow-hidden">
                        <button
                          className="bg-darkBlue text-xs text-white font-semibold hover:bg-darker transition h-1/2"
                          onClick={() => increase(id)}
                        >
                          +
                        </button>
                        <button
                          className="bg-darkBlue text-xs px-2 text-white font-semibold border-t border-gray-200 hover:bg-darker transition h-1/2"
                          onClick={() => decrease(id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 mb-5 text-xs text-center">TOTAL</p>
                      <p className="text-gray-700 text-base font-medium">${(products.price * value).toFixed(2)}</p>

                  </div>
                  <button className="text-red-400 text-sm ml-4 h-5" onClick={()=> dispatch(removeFromCart(id))}>remove</button>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center border-t pt-2">
          <p className="text-sm font-bold text-gray-500">TOTAL</p>
          <p className="text-xl text-gray-700 font-semibold">${total.toFixed(2)}</p>
          </div>
          <button className="text-red-400 font-medium hover:text-red-500 transition text-sm mt-6" onClick={clear}>Clear cart</button>
         
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    total: state.totalPrice
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increase: (id) => dispatch(increaseAmount(id)) ,
    decrease: (id) => dispatch(decreaseAmount(id)),
    clear: ()=> dispatch(clearCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
