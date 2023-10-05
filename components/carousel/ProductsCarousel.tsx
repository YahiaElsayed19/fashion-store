"use client"
import React from 'react'
import { useQuery } from 'react-query'
import ProductSlide from './ProductSlide';
import Link from 'next/link';
import { productType } from '@types';
import { AxiosResponse } from 'axios'
import { Splide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import SlidePlaceholder from '@components/placeholder/SlidePlaceholder';

const ProductsCarousel = ({ queryFunction, title, url }: { queryFunction: (title: string) => Promise<AxiosResponse<any, any>>, title: string, url: string }) => {
    const { data, isLoading } = useQuery(title, () => queryFunction(title))
    return (
        <section className='py-[50px] bg-white dark:bg-black'>
            <div className='container w-full max-w-6xl px-5 mx-auto'>
                <div className="flex justify-between items-center px-5 mb-2">
                    <h2 className='text-black dark:text-white font-bold text-lg capitalize'>{title}</h2>
                    <Link href={url} className='text-primary hover'>See all</Link>
                </div>
                <div className="p-5 bg-gray-200 dark:bg-dark-container rounded-xl" >
                    {isLoading ?
                        <Splide options={{
                            gap: '1rem',
                            rewind: true,
                            arrows: false,
                            pagination: false,
                            autoWidth: true,
                            perMove: 2,
                            autoplay: true,
                            pauseOnHover: true,
                        }}>
                            <SlidePlaceholder count={20} />
                        </Splide>
                        : (<Splide options={{
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
                            {data?.data.map((product: productType) => <ProductSlide key={product._id} id={product._id} title={product.title} price={product.price} imageSrc={product.images[0]} />)}
                        </Splide>)}
                </div>
            </div>
        </section>
    )
}

export default ProductsCarousel