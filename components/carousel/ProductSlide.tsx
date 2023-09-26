import React from 'react'
import Image from 'next/image'
//@ts-ignore
import { SplideSlide } from '@splidejs/react-splide'
import { productSlideType } from '@types'
import { addToCart } from '@util/api'
import { useSession } from 'next-auth/react'
const ProductSlide: React.FC<productSlideType> = ({ id, title, imageSrc, price }) => {
    const { data: session } = useSession()
    const addToCartHandler = () => {
        //@ts-ignore
        addToCart(session?.user.id, id)
        //@ts-ignore
        console.log(session?.user.id);
        console.log(id);
    }
    return (
        <SplideSlide className="text-center">
            <Image src={imageSrc} width={150} height={225} alt={title} className='rounded-2xl' />
            <p className='text-black dark:text-white text-md font-bold mt-2 w-[150px] truncate'>{title}</p>
            <p className='text-primary-color text-sm'>{price} EGP</p>
            <button className='bg-primary-color text-black dark:text-white mt-5 py-2 px-3 rounded-2xl' onClick={addToCartHandler}>+ add to cart</button>
        </SplideSlide>
    )
}

export default ProductSlide