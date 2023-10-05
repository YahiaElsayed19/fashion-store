"use client"
import React from 'react'
import { AxiosResponse } from 'axios'
import ProductsCarousel from './ProductsCarousel'
import { END_POINTS } from '@util/links'
const ProductsCarousels = () => {
    let content = END_POINTS.map((endPoint: { title: string, url: string, queryFunction: (title: string) => Promise<AxiosResponse<any, any>> }) => <ProductsCarousel key={endPoint.title} title={endPoint.title} url={endPoint.url} queryFunction={endPoint.queryFunction} />)
    return (
        <>
            {content}
        </>
    )
}

export default ProductsCarousels