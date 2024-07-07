import React from 'react'
import Layout from '../../Components/Layout/Layout'
import CartProduct from '../../Components/CartProduct/CartProduct'
import { Context } from '../../Context'
import { Payment } from '../../Components/Payment'
import { CartEmpty } from '../../Components/CartEmpty'


function Cart() {
    const context = React.useContext(Context)
    const { cartData } = context

    return (
        <Layout>
            <section className='text-center'>
                <h2 className='text-2xl font-bold md:text-5xl'>SHOPPING CART</h2>
                <div className='grid grid-cols-[2.5fr,0.6fr] gap-5 m-6 max-md:flex max-md:flex-col-reverse'>
                    <div>
                        {cartData?.length === 0
                            ? <CartEmpty />
                            : cartData.map((product, index) => <CartProduct key={index} product={product} />)}
                    </div>
                    <div className='relative'>
                        <Payment />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Cart