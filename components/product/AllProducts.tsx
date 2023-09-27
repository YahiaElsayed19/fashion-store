"use client"
import React from 'react'
import { useQuery } from 'react-query'
import { getProducts } from '@util/api'
import ProductsList from './ProductsList'

const AllProducts = () => {
    const { data } = useQuery("allProducts", () => getProducts())
    return (
        <ProductsList products={data?.data} />
    )
}

export default AllProducts