import React, { createContext, useEffect, useState } from 'react'
import { endPoints } from '../Services/endPoints'

export const Context = createContext()

export function Provider({ children }) {
    const [products, setProducts] = useState(null)

    async function fetchData() {
        const response = await fetch(endPoints.products.getLimitProducts(6))
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <Context.Provider value={{ products }}>
            {children}
        </Context.Provider>
    )
}