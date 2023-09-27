"use client"
import { getProducts } from '@util/api'
import React from 'react'
import { useQuery } from 'react-query'
import { productType } from '@types'
import ProductCard from './ProductCard'
const ProductsList = () => {
    const { data } = useQuery("allProducts", () => getProducts())
    return (
        <section className='py-[50px] flex flex-col items-center bg-white dark:bg-black'>
            <div className='container w-full max-w-6xl p-5 mx-auto '>
                <div className='flex justify-center flex-wrap gap-10 p-5 rounded-2xl bg-gray-200 dark:bg-dark-container'>
                    {data?.data.map((product: productType) => <ProductCard id={product._id} title={product.title} imageSrc={product.images[0]} price={product.price} />)}
                </div>
            </div>
        </section>
    )
}

export default ProductsList