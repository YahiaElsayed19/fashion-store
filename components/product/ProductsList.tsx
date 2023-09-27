"use client"

import React from 'react'
import { productType } from '@types'
import ProductCard from './ProductCard'
const ProductsList = ({ products }: { products: productType[] }) => {
    return (
        <div className='flex flex-col items-center bg-white dark:bg-black'>
            <div className='container w-full max-w-6xl p-5 mx-auto '>
                <div className='flex justify-center flex-wrap gap-10 p-5 rounded-2xl bg-gray-200 dark:bg-dark-container'>
                    {products?.map((product: productType) => <ProductCard key={product._id} id={product._id} title={product.title} imageSrc={product.images[0]} price={product.price} />)}
                </div>
            </div>
        </div>
    )
}

export default ProductsList