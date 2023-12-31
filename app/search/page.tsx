'use client'
import React, { useEffect } from 'react'
import { searchProducts } from '@util/api'
import { useRouter, useSearchParams } from 'next/navigation'
import { useQuery } from 'react-query'
import ProductsList from '@components/product/ProductsList'
import { Triangle } from 'react-loader-spinner'

const page = () => {
    const router = useRouter()
    const search = useSearchParams().get("search") || ""
    const { data, isLoading } = useQuery(`search?${search}`, () => searchProducts(search))
    useEffect(() => {
        if (search.trim().length === 0) {
            router.push("/")
        }
    }, [search])

    return (
        <section className='page'>
            <h1 className='text-2xl font-bold uppercase text-center text-black dark:text-white mb-7'>Search results:</h1>
            {!isLoading && <ProductsList products={data?.data} title={search} />}
            {isLoading && <Triangle
                height="80"
                width="80"
                color="#2196f3"
            />}
        </section>
    )
}

export default page