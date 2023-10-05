import React from 'react'
import { SplideSlide } from '@splidejs/react-splide'
const SlidePlaceholder = ({ count }: { count: number }) => {
    const placeholder = []
    for (let i = 0; i < count; i++) {
        placeholder.push(i)
    }
    return (
        <>
            {
                placeholder.map((i) => <SplideSlide key={i}>
                    <div className='flex flex-col items-center gap-4'>
                        <div className='w-[180px] h-[270px] bg-white dark:bg-black animate-pulse' />
                        <div className='w-[100px] h-[20px] bg-white dark:bg-black animate-pulse' />
                        <div className='w-[80px] h-[20px] bg-white dark:bg-black animate-pulse' />
                        <div className='w-[180px] h-[30px] rounded-full bg-white dark:bg-black animate-pulse' />
                    </div>
                </SplideSlide>
                )
            }
        </>
    )
}

export default SlidePlaceholder