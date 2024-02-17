import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import ProductPreview from '../ProductPreview/ProductPreview'
import RateStar from '../RateStar/RateStar'

function ProductCard({ product }) {
    const [previewOpen, setPreviewOpen] = useState(false)

    return (
        <div className='px-8 w-80 hover:cursor-pointer' onClick={() => {
            setPreviewOpen(true)
        }}>
            <picture className='flex justify-center pb-4'>
                <img
                    src={product.image}
                    alt="shoes"
                    loading='lazy'
                    className='w-56 h-80 shadow-[10px_10px_10px_rgb(20,184,166)] object-contain rounded-lg max-sm:w-40 max-sm:h-60' />
            </picture>
            <div>
                <div className='flex justify-between'>
                    <h3 className='text-start font-bold'>{product.title}</h3>
                </div>
                <div className='mt-2'>
                    <p className='font-bold text-start'>Price: <span className='font-bold text-gray-500'>${product.price}</span></p>
                    <p className='flex items-center'>
                        <span className='font-bold'>Rate: </span>
                        <RateStar rate={product.rating.rate} />
                    </p>
                </div>
            </div>
            <ProductPreview open={previewOpen} setOpen={setPreviewOpen} product={product} />
        </div>
    )
}

export default ProductCard