"use client"
import React from 'react'
import ProductsCarousel from './ProductsCarousel'
import { END_POINTS } from '@util/links'
const ProductsCarousels = () => {
    let content = END_POINTS.map((endPoint: { title: string, queryFunction: any }) => <ProductsCarousel key={endPoint.title} title={endPoint.title} queryFunction={endPoint.queryFunction} />)
    return (
        <>
            {content}
        </>
    )
}

export default ProductsCarousels