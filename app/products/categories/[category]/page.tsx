"use client"
import React, { useState, useEffect } from 'react'
import ProductsList from '@components/product/ProductsList'
import { productType } from '@types'
import { Triangle } from 'react-loader-spinner'
import {getProductsByCategory} from '@util/api'
const lastPage: any = {
    "top": 9,
    "trousers": 8,
    "dress": 5,
    "skirt": 2,
}
const page = ({ params }: { params: { category: string } }) => {
    const category = params.category
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<productType[]>([])
    const loadMore = () => {
        setPage((prev) => prev + 1)
    }
    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await getProductsByCategory(category, page)
            if (page === 1) {
                setProducts(data)
            }
            if (page > 1 && page <= lastPage[category]) {
                setProducts((prev) => [...prev, ...data])
            }
            setLoading(false)
        })()
    }, [page])
    return (
        <section className='min-h-screen bg-white dark:bg-black flex flex-col items-center py-[50px]'>
            <h1 className='text-2xl font-bold uppercase text-center text-black dark:text-white'>{category} products</h1>
            <ProductsList products={products} />
            {loading && <Triangle
                height="80"
                width="80"
                color="#2196f3"
            />}
            <button className='button' onClick={loadMore} disabled={page >= lastPage[category]}>Show more</button>
        </section>
    )
}

export default page