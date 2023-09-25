"use client"
import React from 'react'
import '@splidejs/react-splide/css';
import { useQuery } from 'react-query'
//@ts-ignore
import { Splide } from '@splidejs/react-splide'
import { getAllProducts } from '@util/api';
import ProductCard from './ProductCard';
const ProductsList = () => {
    const { data } = useQuery("id", () => getAllProducts())
    return (
        <section className='py-[100px] bg-white dark:bg-black'>
            <div className='container w-full max-w-6xl px-5 mx-auto'>
                <div className="p-5 bg-gray-200 dark:bg-dark-container rounded-2xl" >
                    <Splide options={{
                        gap: '1rem',
                        rewind: true,
                        arrows: true,
                        pagination: false,
                        autoWidth: true,
                        perMove: 2,
                        autoplay: true,
                        pauseOnHover: true,
                    }}
                    >
                        {data?.data.map((product: any) => <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} imageSrc={product.images[0]} />)}
                    </Splide>
                </div>
            </div>
        </section>
    )
}

export default ProductsList