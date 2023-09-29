"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const productId = useSearchParams().get("product-id")
    return (
        <div>{productId}</div>
    )
}

export default page