import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { endPoints } from '../../Services/endPoints'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'

function Categories() {
    const [categories, setCategories] = useState(null)

    async function fecthCategories() {
        const response = await fetch(endPoints.products.getAllCategories)
        const data = await response.json()
        setCategories(data)
    }

    useEffect(() => {
        try {
            fecthCategories()
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <Layout>
            <section className='text-center'>
                <h2 className='text-2xl font-bold md:text-5xl'>Categories</h2>
                <div className='my-6'>
                    {categories?.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default Categories