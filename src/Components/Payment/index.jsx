import React, { useEffect } from 'react'
import { Context } from '../../Context';

function Payment() {
    const context = React.useContext(Context)
    const { cartData, totalPayment, setTotalPayment } = context

    useEffect(() => {
        let count = 0
        cartData?.forEach(item => {
            count = count + item.price
            setTotalPayment(count)
        })
    }, [cartData])

    return (
        <div className='border-2 rounded-md  flex flex-col justify-center md:sticky'>
            <h3 className='font-bold'>Order Summary</h3>
            <div className='flex justify-between md:flex-col px-2'>
                <div className='border-b-2'>
                    <p className='font-bold'>Subtotal:</p>
                    <p>{totalPayment}</p>
                </div>
                <div className='border-b-2'>
                    <p className='font-bold'>Tax:</p>
                    <p>{(totalPayment * 0.02).toFixed(2)}</p>
                </div>
                <div className='border-b-2'>
                    <p className='font-bold'>Total</p>
                    <p>{parseInt(totalPayment + (totalPayment * 0.02).toFixed(2))}</p>
                </div>
                <button className='bg-teal-600 px-3 rounded-md mt-4' onClick={() => {
                    console.log(getProductsCart());
                }}>
                    Order
                </button>
            </div>
        </div>
    )
}

export { Payment }