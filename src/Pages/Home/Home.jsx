import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import Button from '../../Components/Button/Button'
import { Context } from '../../Context'

function Home() {
    const context = useContext(Context)
    const { products } = context
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
                        <img src="https://images.unsplash.com/photo-1572611932849-7f0f116fb2f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading='lazy' alt="shop"
                            className='w-auto h-80 object-cover rounded-md max-md:hidden' />
                    </picture>
                </div>
            </section>

            <section className='mb-12'>
                <div className='flex flex-col justify-center sm:px-28'>
                    <h2 className='text-2xl sm:text-5xl font-bold pb-10'>"Experience the future of shopping<br />with e-Shop, where innovation meets <br /> style in every product we offer."</h2>
                    <div className='grid grid-cols-2 place-items-center gap-10 lg:grid-cols-3 max-sm:grid-cols-1'>
                        {products?.map(product => {
                            return (
                                <picture key={product.id} >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className='w-56 h-80 shadow-[10px_10px_10px_rgb(20,184,166)] object-contain rounded-lg max-sm:w-40 max-sm:h-60' />
                                </picture>
                            )
                        })}
                    </div>
                </div>

            </section>

            <section className='flex gap-x-16 p-10'>
                <img src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about_image" loading='lazy' width={"400"} className='max-lg:hidden rounded-md' />
                <div className='text-center'>
                    <h3 className='text-3xl font-bold max-sm:text-xl'>About Us</h3>
                    <p className='text-lg text-slate-500 pt-3  max-sm:text-xs'>Welcome to e-Shop, where exceptional products meet unparalleled service.<br /> Our mission is simple – to provide a curated selection of high-quality items that seamlessly integrate into your lifestyle.<br />With a commitment to variety, quality, and personalized service, e-Shop is more than a store; it's an experience.</p>
                </div>
            </section>
        </Layout>
    )
}

export default Home