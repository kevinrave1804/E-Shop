import React from 'react'
import { NavLink } from 'react-router-dom'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import Button from '../Button/Button'

function Navbar() {
    return (
        <header className='bg-[#75FBB2] w-full h-[80px] flex fixed top-0 z-10'>
            <nav className='w-full flex justify-between'>
                <ul className='flex items-center'>
                    <NavLink to={'/categories'}>
                        <li className='text-xl font-medium ml-3 p-3 border border-black rounded-md'>Categories</li>
                    </NavLink>
                    <NavLink to={'/products'}>
                        <li className='text-xl font-medium ml-3 p-3 border border-black rounded-md'>Products</li>
                    </NavLink>
                </ul>


                <div className='flex items-center'>
                    <BuildingStorefrontIcon className='h-14 w-14' />
                    <h2 className='text-5xl font-bold'>E-Shop</h2>
                </div>

                <div className='flex items-center'>
                    <Button text='Log in' />
                    <Button text='Sign in' role={'primary'} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar