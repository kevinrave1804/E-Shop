import React from 'react'
import { NavLink } from 'react-router-dom'
import { BuildingStorefrontIcon, Bars3Icon } from '@heroicons/react/24/solid'
import Button from '../Button/Button'

function Navbar() {
    return (
        <header className='bg-[#75FBB2] w-full flex md:fixed top-0'>
            <nav className='w-full flex justify-between items-center'>
                <ul className='flex items-center max-sm:hidden'>
                    <NavLink to={'/categories'}>
                        <li className='font-medium ml-3 p-3 border border-black rounded-md'>Categories</li>
                    </NavLink>
                    <NavLink to={'/products'}>
                        <li className='font-medium ml-3 p-3 border border-black rounded-md'>Products</li>
                    </NavLink>
                </ul>


                <div>
                    <NavLink
                        to={'/'}
                        className={'flex items-center'}>
                        <BuildingStorefrontIcon className='h-14 w-14' />
                        <h2 className='text-5xl font-bold'>E-Shop</h2>
                    </NavLink>
                </div>

                <div className='flex items-center max-sm:hidden'>
                    <Button text='Log in' />
                    <Button text='Sign in' role={'primary'} />
                </div>

                <Bars3Icon className='w-12 h-12 sm:hidden' />
            </nav>
        </header>
    )
}

export default Navbar