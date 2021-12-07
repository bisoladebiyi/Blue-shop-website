import React, { useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/navbar";
import useFetch from "../useFetch";
import close from "../icons/close.svg"
import LoadingState from "../components/loading";
import { Link } from "react-router-dom";




const ProductInfo = () => {
  const { id } = useParams();
  const url = "https://fakestoreapi.com/products/" + id;
  const { products, isLoading } = useFetch(url);
  const [showPopUp, setShowPopUp] = useState(false);
  const [value, setValue] = useState(1);

  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const addToCart = () => {
    setShowPopUp(true);
  };


  return (
    <div className="h-full relative">
      <Navbar />
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="grid place-items-center h-full">
          <div className="flex flex-col items-center bigger:flex-row justify-between shadow bg-white w-5/6 h-auto p-4 sm:p-10">
            <img className="w-4/6 mt-7 bigger:mt-0 sm:w-3/6 md:w-1/3 h-full mb-16 bigger:mb-0" src={products.image} alt="" />
            <div className="w-11/12 sm:w-4/6 md:w-1/2 relative">
              <p className="text-xl font-bold mb-4">{products.title}</p>
              <p className="text-large text-darkBlue font-bold">
                ${products.price}
              </p>
              <p className="text-xs text-green-600 mt-2">
                Availabilty: In stock
              </p>
              <div className="w-full bg-gray-300 h-px mt-3 rounded"></div>
              <p className="text-sm mt-4 text-gray-700">
                {products.description}
              </p>
              <div className="flex h-8 w-auto bigger:w-1/5 bigger:justify-between mt-10 items-center">
                <p>Qty:</p>
                <div className="flex h-full ml-2">
                  <input
                    className="bg-gray-100 border-none px-1 w-8 h-full rounded-l-sm focus:outline-none text-sm"
                    type="text"
                    onChange={(e) => changeValue(e)}
                    value={value}
                  />
                  <div className="flex flex-col rounded-r-sm overflow-hidden">
                    <button
                      className="bg-darkBlue text-xs text-white font-semibold hover:bg-darker transition h-1/2"
                      onClick={() => setValue(value + 1)}
                    >
                      +
                    </button>
                    <button
                      className="bg-darkBlue text-xs px-2 text-white font-semibold border-t border-gray-200 hover:bg-darker transition h-1/2"
                      onClick={() => setValue(value - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="w-full font-semibold hover:bg-darker transition rounded bg-darkBlue text-white py-3 mt-7 bigger:mt-16"
                onClick={addToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
          {showPopUp && (
        <div className="grid grid-cols-1 place-items-center w-full h-screen absolute top-0">
          <div className="w-3/4 md:w-2/5 h-auto text-center bg-white shadow-md rounded-md p-5 py-7 relative">
              <div className="w-full flex justify-end">
              <button className="w-7" onClick={()=> setShowPopUp(false)}><img className="w-full h-full" src={close} alt=""/></button>

              </div>
              
            <p className="text-green-600 mb-7">Item added to cart!</p>
            <Link to="/cart"><button className="w-full text-sm font-semibold hover:bg-darker transition rounded bg-darkBlue text-white py-1">
              GO TO CART
            </button></Link>
          </div>
        </div>
      )}
        </div>
      )}

     
    </div>
  );
};




export default ProductInfo;

