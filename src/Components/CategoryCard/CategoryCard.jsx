import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { endPoints } from '../../Services/endPoints'

function CategoryCard({ category }) {
    const [productsCategory, setProductsCategory] = useState([])

    async function getProductsCategory(category) {
        const response = await fetch(endPoints.products.getProductsCategory(category))
        const data = await response.json()
        setProductsCategory(data)
    }

    useEffect(() => {
        try {
            getProductsCategory(category)
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <section className='mb-4'>
            <div className="mx-auto max-w-screen-xl px-4 py-8 border-2 border-teal-400 rounded-md sm:px-6 sm:py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                        <div className="mx-auto max-w-md text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">{category.toUpperCase()}</h2>

                                <p className="mt-4 text-gray-500">
                                    Explore our diverse range of categories, each curated to cater to your unique needs and interests. Discover quality products in every niche, making your online shopping experience a breeze. From fashion and electronics to home decor and beyond, find the perfect item that suits your style and preferences. Happy shopping!
                                </p>
                            </header>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="flex overflow-x-auto">
                            {productsCategory?.map(product => (
                                <li key={product.id}>
                                    <ProductCard product={product} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoryCard