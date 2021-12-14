import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingState from '../components/loading'
import Navbar from '../components/navbar'
import SingleProduct from '../components/single-product'
import useFetch from '../useFetch'


const url = "https://fakestoreapi.com/products?limit=15";
const Home = () => {
    const { products, isLoading } = useFetch(url);
    const [ searchValue, setSearchValue ] = useState('')
    const search =(e) => {
      setSearchValue(e.target.value)
    }
    return (
        <div className="h-full">
            {isLoading ? (
        <LoadingState />
      ) : (
        <div className="">
          <Navbar search={search}/>
          <p className="text-center text-black font-bold text-2xl mt-14">
            Featured Products
          </p>
          <div className="grid place-items-center mt-16">
            <div className=" w-11/12 sm:w-5/6 lg:w-4/6 grid grid-cols-1 mobile:grid-cols-2 med:grid-cols-3">
              {products.filter((product) => {
                      if(searchValue === ""){
                        return product
                      }else if(product.title.toLowerCase().includes(searchValue.toLowerCase())) {
                        return product
                      }
              }).map((product) => {
                const { id } = product;
                return <Link to={`/product-detail/${id}`}><SingleProduct key={id} product={product}  /></Link>;
              })}
            </div>
            <p className="text-sm text-darkBlue my-10 text-center">Nothing more to see...Go shop! 🙃</p>
          </div>
        </div>
      )}
        </div>
    )
}

export default Home
