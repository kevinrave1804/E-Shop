import React, { useEffect } from 'react'
import { Context } from '../../Context';
import { deleteProductInCart, getProductsCart } from '../../Services/localStorage';
import { OrderComplete } from '../OrderComplete';

function Payment() {
    const context = React.useContext(Context)
    const { cartData, setCarData, totalPayment, setTotalPayment } = context
    const [open, setOpen] = React.useState(false)

    useEffect(() => {
        let count = 0
        setTotalPayment(0)
        cartData?.forEach(item => {
            count = count + (item.price * item?.countUnity)
            setTotalPayment(count)
        })
    }, [cartData])

    const tax = parseFloat((totalPayment * 0.05).toFixed(2))
    const total = parseFloat(totalPayment + tax).toFixed(2)
    const subtotal = parseFloat(totalPayment).toFixed(2)

    return (
        <div className='border-2 rounded-md  flex flex-col justify-center md:sticky'>
            <h3 className='font-bold'>Order Summary</h3>
            <div className='flex justify-between md:flex-col px-2'>
                <div className='border-b-2'>
                    <p className='font-bold'>Subtotal:</p>
                    <p>{subtotal}</p>
                </div>
                <div className='border-b-2'>
                    <p className='font-bold'>Tax:</p>
                    <p>{tax}</p>
                </div>
                <div className='border-b-2'>
                    <p className='font-bold'>Total</p>
                    <p>{total}</p>
                </div>
                <button className='bg-teal-600 px-3 rounded-md mt-4' onClick={() => {
                    setOpen(true)
                    cartData.forEach(item => {
                        deleteProductInCart(item)
                    })
                    setCarData(getProductsCart())
                }}>
                    Order
                </button>
            </div>
            <OrderComplete open={open} setOpen={setOpen} />
        </div>
    )
}

export { Payment }