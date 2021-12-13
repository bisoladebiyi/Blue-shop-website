import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Cart = (props) => {
  const { data, total } = props;

  return (
    <div className="h-full">
      <Navbar />
      <div className="h-full w-full grid place-items-center">
        <div className="h-auto w-5/6 p-10 bg-gray-100 rounded">
          { data === [] ? <p>No item in cart!</p> : data.map(({ value, products, id }) => {
            return (
              <div className="flex justify-between mb-10">
                <div className="w-1/2">
                  <p className="font-bold text-gray-700 mb-5">PRODUCT DETAILS</p>
                  <div className="flex">
                  <img
                    className="w-36 h-44 rounded-md"
                    src={products.image}
                    alt=""
                  />
                  <div className="w-1/2 ml-10 text-gray-500 font-medium">
                    <p>{products.title}</p>
                    <p className="mt-5 text-gray-700">${products.price}</p>
                  
                  </div>
                </div>
                </div>
                

                <div className="flex w-1/4 justify-between">
                  <div className="h-8 w-auto">
                    <p className="font-bold text-gray-700 mb-5">QTY</p>
                    <div className="flex h-full ml-2">
                      <input
                        className="bg-white border-none px-1 w-8 h-full rounded-l-sm focus:outline-none text-sm"
                        type="text"
                        // onChange={(e) => changeValue(e)}
                        value={value}
                      />
                      <div className="flex flex-col rounded-r-sm overflow-hidden">
                        <button
                          className="bg-darkBlue text-xs text-white font-semibold hover:bg-darker transition h-1/2"
                          onClick={() => value + 1}
                        >
                          +
                        </button>
                        <button
                          className="bg-darkBlue text-xs px-2 text-white font-semibold border-t border-gray-200 hover:bg-darker transition h-1/2"
                          onClick={() => value - 1}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 mb-5">TOTAL</p>
                      <p className="text-gray-700 text-lg font-medium">${products.price * value}</p>

                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between">
          <p>TOTAL</p>
          <p className="text-2xl text-gray-700 font-semibold">${total}</p>

          </div>
         
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

export default connect(mapStateToProps, null)(Cart);
