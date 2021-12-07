import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Cart = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="h-5/6 grid place-items-center">
          <div className="text-center">
          <p className="text-7xl font-bold text-darkBlue">404</p>
          <p className="uppercase text-red-500 font-bold text-sm">page not found!</p>
          <Link to="/"><button className="bg-darkBlue px-2 py-1 text-sm text-white font-bold transition hover:bg-darker mt-6 rounded-lg">Go Home</button></Link>

          </div>
          
      </div>
    </div>
  );
};

export default Cart;
