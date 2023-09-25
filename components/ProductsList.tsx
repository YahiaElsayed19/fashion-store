"use client"
import React from 'react'
import '@splidejs/react-splide/css';
import { useQuery } from 'react-query'
import { getProductsByType } from '@util/api';
import ProductCard from './ProductCard';
import Link from 'next/link';
//@ts-ignore
import { Splide } from '@splidejs/react-splide'
import { productType } from '@types';

const ProductsList = () => {
    const { data } = useQuery("trending", () => getProductsByType("trending"))
    return (
        <section className='py-[100px] bg-white dark:bg-black'>
            <div className='container w-full max-w-6xl px-5 mx-auto'>
                <div className="flex justify-between px-5 mb-2">
                    <h2 className='text-black dark:text-white font-bold text-lg'>Trending</h2>
                    <Link href="http://localhost:3000/trending" className='text-primary-color hover'>See all</Link>
                </div>
                <div className="p-5 bg-gray-200 dark:bg-dark-container rounded-2xl" >
                    <Splide options={{
                        gap: '1rem',
                        rewind: true,
                        arrows: false,
                        pagination: false,
                        autoWidth: true,
                        perMove: 2,
                        autoplay: true,
                        pauseOnHover: true,
                    }}
                    >
                        {data?.data.map((product: productType) => <ProductCard key={product._id} id={product._id} title={product.title} price={product.price} imageSrc={product.images[0]} />)}
                    </Splide>
                </div>
            </div>
        </section>
    )
}

export default ProductsList