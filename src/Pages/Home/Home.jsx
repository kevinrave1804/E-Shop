import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../Components/Layout/Layout'
import Button from '../../Components/Button/Button'

function Home() {
    return (
        <Layout>
            <section className='bg-gradient-to-b from-teal-600 to-white'>
                <div className="flex items-center gap-x-5 isolate px-6">
                    <div className="max-w-2xl py-14">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Discover Elegance: Elevate Your Lifestyle with E-Shop
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-black">
                                Elevate your style with E-Shop - where innovation meets convenience. Discover curated products for a seamless and stylish shopping experience.
                            </p>
                            <div className="mt-10">
                                <Button text={"Shop now"} route={"/products"} role={"primary"} />
                            </div>
                        </div>
                    </div>
                    <picture>
                        <img src="https://images.unsplash.com/photo-1572611932849-7f0f116fb2f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="shop"
                            className='w-auto h-80 object-cover rounded-md max-md:hidden' />
                    </picture>
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