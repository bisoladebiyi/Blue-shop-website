import React from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/navbar'
import useFetch from '../useFetch'



const ProductInfo = () => {
    const { id } = useParams()
    const url = "https://fakestoreapi.com/products/" + id
    const { products } = useFetch(url)
   
    
    return (
        <div>
            <Navbar />
            <div>
                <p></p>
                <button onClick={()=> console.log(products)}>click eme</button>
            </div>
            
        </div>
    )
}

export default ProductInfo
