import React from 'react'
import { IoClose } from 'react-icons/io5'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import { deleteProductInCart, getProductsCart, updateCartInCart } from '../../Services/localStorage'
import { Context } from '../../Context'

function CartProduct({ product }) {
    const [countUnity, setCountUnity] = React.useState(product.countUnity)
    const context = React.useContext(Context)
    const { setCarData } = context
    return (
        <section className='grid grid-cols-2 mb-6 border-b-4 pb-2'>
            <div className='flex max-md:flex-col'>
                <div>
                    <picture className='w-32 flex justify-center'>
                        <img
                            src={product.image}
                            alt={product.title}
                            className='w-20 h-32 shadow-[10px_10px_10px_gray] object-contain rounded-lg max-sm:w-40 max-sm:h-60' />
                    </picture>
                </div>
                <p className='pt-6 font-bold '>{product.title}</p>
            </div>
            <div className='relative'>
                <IoClose size={15} className='absolute right-0 cursor-pointer' onClick={() => {
                    deleteProductInCart(product)
                    setCarData(getProductsCart())
                }} />
                <div className='flex items-center justify-between mt-8 p-2 border-2 rounded-md'>
                    <FaPlus size={15} onClick={() => {
                        setCountUnity(countUnity + 1)
                        deleteProductInCart(product)
                        console.log(updateCartInCart(product, countUnity + 1))
                    }} className='cursor-pointer' />
                    <span>{countUnity}</span>
                    <FaMinus size={15} onClick={() => {
                        setCountUnity(countUnity - 1)
                        deleteProductInCart(product)
                        console.log(updateCartInCart(product, countUnity - 1))
                    }} className='cursor-pointer' />
                </div>
                <p className='mt-8 font-bold'>Price:<span> ${product.price}</span></p>
            </div>
        </section>
    )
}

export default CartProduct