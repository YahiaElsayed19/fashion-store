import React from 'react'

const page = async ({ searchParams }: { searchParams: any }) => {
    const response = await fetch(`${process.env.BASE_URL}/api/products/product?product-id=${searchParams['product-id']}`)
    const data = await response.json()
    console.log(data);

    return (
        <div>test</div>
    )
}

export default page