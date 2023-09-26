import React from 'react'
import Image from 'next/image'
//@ts-ignore
import { SplideSlide } from '@splidejs/react-splide'
import { productCard } from '@types'
const ProductSlide: React.FC<productCard> = ({ id, title, imageSrc, price }) => {
    return (
        <SplideSlide className="text-center">
            <Image src={imageSrc} width={150} height={225} alt={title} className='rounded-2xl' />
            <p className='text-black dark:text-white text-md font-bold mt-2 w-[150px]'>{title}</p>
            <p className='text-primary-color text-sm'>{price} EGP</p>
        </SplideSlide>
    )
}

export default ProductSlide