import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CiShoppingCart } from 'react-icons/ci'


function CartEmpty() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center p-12 justify-center">
            <h2 className='text-2xl mb-5'>Your Shopping Cart is Empty</h2>
            <CiShoppingCart className='text-9xl text-gray-300' />
            <p className='text-lg mb-7'>It looks like you haven't added anything to your cart yet.</p>
            <button className='bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 mt-6 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium text-white cursor-pointer' onClick={() => navigate('/products')}>Go to Shop</button>
        </div>
    )
}

export { CartEmpty }