"use client"
import React, { useEffect, useState } from 'react'
import { getProduct } from '@util/api'
import { useSearchParams } from 'next/navigation'
import { productType } from '@types'

const page = () => {
    const [product, setProduct] = useState<productType>()
    const productId = useSearchParams().get('product-id') || ""
    useEffect(() => {
        (async () => {
            const { data } = await getProduct(productId)
            setProduct(data)
        })()
    }, [])

    return (
        <div>
            <h1>{product?._id}</h1>
            <h1>{product?.title}</h1>
            <h1>{product?.category}</h1>
            <h1>{product?.type}</h1>
            <h1>{product?.desc}</h1>
            <h1>{product?.gender}</h1>
            <h1>{product?.price}</h1>
        </div>
    )
}

export default page