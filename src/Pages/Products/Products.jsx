import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { Context } from '../../Context/index'

function Products() {
    const context = useContext(Context)
    const { products } = context
    return (
        <Layout>
            <section className='text-center'>
                <h2 className='text-2xl font-bold'>Essentials Redefined: Explore Our Signature <br />Collection at e-Shop</h2>
                <div className='grid grid-cols-2 place-items-center gap-10 my-10 lg:grid-cols-3 max-sm:grid-cols-1'>
                    {products?.map(product => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })}
                </div>
            </section>
        </Layout>
    )
}

export default Products