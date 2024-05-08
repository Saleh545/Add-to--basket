import React from 'react'

const ProductItem = ({product ,setCart}) => {

    const addToCart = (product)=>{
//  setCart([...cart, product])
setCart((prevState) =>[...prevState, product])
console.log(product)
    }
   return (
    <div className='border p-4 m-2 rounded-xl shadow-lg'>
        <img className='w-full h-48 object-cover rounded-t-lg' src="public/images/250.png" alt="" />
        <div className='p-4'>
            <h2 className='text-xl font-semibold'>{product.name}</h2>
            <p className='text-gray-500 my-2'>{product.price} manat</p>
            <button onClick={()=> addToCart(product)} className='bg-blue-500 text-white px-4 py-2 rounded  hover:bg-blue-600 w-full'>Səbətə əlavə et</button>
        </div>
    </div>
  )
}

export default ProductItem