"use client"
import React, { useState, useEffect } from 'react'
import ProductsList from '@components/product/ProductsList'
import { productType } from '@types'
import { Triangle } from 'react-loader-spinner'
import { getProductsByType } from '@util/api'

const page = () => {
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<productType[]>([])
    const loadMore = () => {
        setPage((prev) => prev + 1)
    }
    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await getProductsByType("trending", page)
            if (page === 1) {
                setProducts(data)
            }
            if (page > 1 && page <= 8) {
                setProducts((prev) => [...prev, ...data])
            }
            setLoading(false)
        })()
    }, [page])
    return (
        <section className='min-h-screen bg-white dark:bg-black flex flex-col items-center py-[50px]'>
            <h1 className='text-2xl font-bold uppercase text-center text-black dark:text-white'>Trending products</h1>
            <ProductsList products={products} />
            {loading && <Triangle
                height="80"
                width="80"
                color="#2196f3"
            />}
            <button className='button' onClick={loadMore} disabled={page >= 8}>Show more</button>
        </section>
    )
}

export default page