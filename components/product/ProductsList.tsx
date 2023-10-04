"use client"

import React from 'react'
import { productType } from '@types'
import ProductCard from './ProductCard'
import ProductCardPlaceholder from '@components/placeholder/ProductCardPlaceholder'
const ProductsList = ({ products, title, loading, placeholderCount }: { title: string, products: productType[], loading?: boolean, placeholderCount?: number }) => {
    return (
        <div className='flex flex-col items-center bg-white dark:bg-black group list'>
            <h1 className='text-2xl font-bold uppercase text-center text-black dark:text-white'><span className='text-primary'>{title}</span> products</h1>
            <div className='container w-full max-w-6xl p-5 mx-auto '>
                <div className='flex justify-center flex-wrap gap-10 p-5 rounded-xl bg-gray-200 dark:bg-dark-container'>
                    {products.length > 0 && products?.map((product: productType) => <ProductCard key={product._id} id={product._id} title={product.title} imageSrc={product.images[0]} price={product.price} />)}
                    {!loading && products.length == 0 && <p className='font-bold text-black dark:text-white'>There is no products</p>}
                    {loading && <ProductCardPlaceholder count={placeholderCount || 20} />}
                </div>
            </div>
        </div>
    )
}

export default ProductsList