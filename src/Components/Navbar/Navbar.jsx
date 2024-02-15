import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import Button from '../Button/Button'
import UserMenu from '../UserMenu/UserMenu'

const navigation = [
    { name: 'Categories', href: '/categories' },
    { name: 'Products', href: '/products' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const [login, setLogin] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="bg-teal-600 fixed inset-x-0 top-0 z-10">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <NavLink to={"/"} className="flex flex-shrink-0 items-center">
                        <BuildingStorefrontIcon className='h-8 w-auto' />
                        <h2 className='text-xl font-bold'>E-Shop</h2>
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-bold leading-6 text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {login ? <UserMenu /> : <Button text='Log in' route={'/auth'} />}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-teal-600 to-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <NavLink to={"/"} className="flex flex-shrink-0 items-center">
                            <BuildingStorefrontIcon className='h-8 w-auto' />
                            <h2 className='text-xl font-bold'>E-Shop</h2>
                        </NavLink>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-black"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="py-6">
                                {login ?
                                    <NavLink
                                        to={"/profile"}
                                        className={"flex items-center"}>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <p className='font-bold ml-2'>Your Profile</p>
                                    </NavLink>
                                    : <p>Log in <span aria-hidden="true">&rarr;</span></p>}

                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Navbar