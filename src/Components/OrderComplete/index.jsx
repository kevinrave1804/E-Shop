import React, { Fragment } from 'react'
import { CiCircleCheck } from 'react-icons/ci'
import { FaCartArrowDown } from 'react-icons/fa'
import { Dialog, Transition } from '@headlessui/react'

function OrderComplete({ open, setOpen }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                </Transition.Child>

                <div className="fixed top-14 left-44 z-10 w-screen">
                    <div className='max-w-[640px] bg-white flex flex-col items-center rounded-md p-10'>
                        <CiCircleCheck className='text-teal-600' size={50} />
                        <h2 className='text-3xl font-semibold'>Order complete</h2>
                        <FaCartArrowDown size={200} />
                        <p className='font-semibold'>Thank you for your purchase</p>
                        <button className='bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 mt-6 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium text-white'
                            onClick={() => {
                                setOpen(false)
                            }}>
                            Accept
                        </button>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export { OrderComplete }