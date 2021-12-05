import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import SingleProduct from "./single-product";

const url = "https://fakestoreapi.com/products?limit=9";
const Products = () => {
  const { products, isLoading } = useFetch(url);
  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="">
          <p className="text-left ml-10 text-black font-bold text-2xl mt-10">
            Featured Product
          </p>
          <div className="grid place-items-center mt-20">
            <div className="w-4/6 grid grid-cols-3 gap-y-10">
              {products.map((product) => {
                const { id } = product;
                return <Link to={`/product-detail/${id}`}><SingleProduct key={id} product={product} /></Link>;
              })}
            </div>
          </div>
        </div>
      )}

      {/* <button onClick={()=> console.log(products)}>click me</button> */}
    </div>
  );
};

export default Products;
