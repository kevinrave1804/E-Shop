import React, { createContext, useEffect, useState } from 'react'
import { endPoints } from '../Services/endPoints'

export const Context = createContext()

export function Provider({ children }) {
    const [limitProducts, setlimitProducts] = useState(null)
    const [products, setProdcuts] = useState(null)

    async function fetchLimitProducts() {
        const response = await fetch(endPoints.products.getLimitProducts(6))
        const data = await response.json()
        setlimitProducts(data)
    }

    async function fetchProducts() {
        const response = await fetch(endPoints.products.getAllProducts)
        const data = await response.json()
        setProdcuts(data)
    }

    useEffect(() => {
        try {
            fetchLimitProducts()
            fetchProducts()
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <Context.Provider value={{
            limitProducts,
            products
        }}>
            {children}
        </Context.Provider>
    )
}