"use client"
import React, { useEffect, useState } from 'react'
import { getProducts } from '@util/api'
import ProductsList from './ProductsList'
import { productType } from '@types'

const AllProducts = () => {
    const [page, setPage] = useState(1)
    const [products, setProducts] = useState<productType[]>([])
    const loadMore = () => {
        setPage((prev) => prev + 1)
    }
    useEffect(() => {
        (async () => {
            const { data } = await getProducts(page)
            if (page === 1) {
                setProducts(data)
            }
            if (page > 1 && page < 23) {
                setProducts((prev) => [...prev, ...data])
            }
        })()
    }, [page])
    return (
        <section className='bg-white dark:bg-black flex flex-col items-center py-[50px]'>
            <h1 className='text-2xl font-bold uppercase text-center text-black dark:text-white'>All products</h1>
            <ProductsList products={products} />
            <button className='button' onClick={loadMore}>Show more</button>
        </section>
    )
}

export default AllProducts