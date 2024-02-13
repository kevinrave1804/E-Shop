import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Button from '../../Components/Button/Button'
import './index.css'

function Home() {
    return (
        <Layout>
            <section className='relative h-80 max-sm:h-64 min-[280px]:h-80'>
                <div className='introsection h-full w-full'>
                </div>
                <div className='absolute top-0 pl-4'>
                    <h2 className='lg:text-7xl font-bold pb-3 text-2xl md:text-4xl'>Discover Elegance: Elevate Your Lifestyle with E-Shop</h2>
                    <p className='text-3xl pb-3 max-sm:text-md max-md:text-lg'>Elevate your style with E-Shop - where innovation meets convenience. Discover curated products for a seamless and stylish shopping experience.</p>
                    <Button text={"Shop"} role={"primary"} />
                </div>
            </section>

            <section>
            </section>

            <section>

            </section>
        </Layout>
    )
}

export default Home