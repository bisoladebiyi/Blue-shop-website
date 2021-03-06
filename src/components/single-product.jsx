import React from 'react'

const SingleProduct = ({ product }) => {
    const { image, title, price } = product
    return (
       <div className="grid place-items-center">
            <div className="w-5/6 px-6 mb-10 h-80 shadow border-2 cursor-pointer transition hover:border-darkBlue grid place-items-center rounded-md overflow-hidden relative text-white ">
                <img className="w-full " src={image} alt="" />
            <div className="absolute bottom-0 py-6 w-full price-container">
                <p className="text-xs text-center">{title}</p>
                <p className="text-sm font-bold text-center">${price}</p>
            </div>
        </div>

       </div>
       
    )
}

export default SingleProduct
