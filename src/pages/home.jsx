import React from 'react'
import Navbar from '../components/navbar'
import Products from '../components/products'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Products />
            <p className="text-sm text-darkBlue my-10 text-center">Nothing more to see...Go shop! 🙃</p>
            
        </div>
    )
}

export default Home
