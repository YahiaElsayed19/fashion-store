"use client"
import React, { useState, useEffect } from 'react'
import ProductsList from '@components/product/ProductsList'
import { productType } from '@types'
import { Triangle } from 'react-loader-spinner'
import { getProductsByType } from '@util/api'
const lastPage: any = {
    "new": 9,
    "trending": 8,
    "hot": 6,
}
const page = ({ params }: { params: { type: string } }) => {
    const type = params.type
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<productType[]>([])
    const loadMore = () => {
        setPage((prev) => prev + 1)
    }
    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await getProductsByType(type, page)
            if (page === 1) {
                setProducts(data)
            }
            if (page > 1 && page <= lastPage[type]) {
                setProducts((prev) => [...prev, ...data])
            }
            setLoading(false)
        })()
    }, [page])
    return (
        <section className='min-h-screen bg-white dark:bg-black flex flex-col items-center py-[50px]'>
            <ProductsList products={products} title={type}/>
            {loading && <Triangle
                height="80"
                width="80"
                color="#2196f3"
            />}
            <button className='button' onClick={loadMore} disabled={page >= lastPage[type]}>Show more</button>
        </section>
    )
}

export default page