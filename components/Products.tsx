"use client"
import React from 'react'
import ProductsList from './ProductsList'
import { END_POINTS } from '@util/links'
const Products = () => {
    let content = END_POINTS.map((endPoint: { title: string, queryFunction: any }) => <ProductsList key={endPoint.title} title={endPoint.title} queryFunction={endPoint.queryFunction} />)
    return (
        <>
            {content}
        </>
    )
}

export default Products