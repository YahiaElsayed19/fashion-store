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
        <section className='bg-white dark:bg-black flex flex-col items-center py-[50px] min-h-screen'>
            <h1 className='text-2xl font-bold uppercase text-center text-black dark:text-white mb-7'>Search results:</h1>
            {!isLoading && data?.data.length > 0 && <ProductsList products={data?.data} />}
            {isLoading && <Triangle
                height="80"
                width="80"
                color="#2196f3"
            />}
            {!isLoading && data?.data.length === 0 && <p className='text-black dark:text-white text-center font-bold text-lg'>There is no results found!</p>}
        </section>
    )
}

export default page