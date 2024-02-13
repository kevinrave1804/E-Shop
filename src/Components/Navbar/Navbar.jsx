import React from 'react'
import Button from '../Button/Button'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'

function Navbar() {
    return (
        <header className='bg-[#75FBB2] w-full h-[80px] flex fixed'>
            <nav className='w-full flex justify-between'>
                <ul className='flex items-center'>
                    <li className='text-xl font-medium ml-3 p-3 border border-black rounded-md'>Categories</li>
                    <li className='text-xl font-medium ml-3 p-3 border border-black rounded-md'>Products</li>
                </ul>


                <div className='flex items-center'>
                    <BuildingStorefrontIcon className='h-14 w-14' />
                    <h2 className='text-5xl font-bold'>E-Shop</h2>
                </div>

                <div className='flex items-center'>
                    <Button text='Log in' />
                    <Button text='Sign in' role={"primary"} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar