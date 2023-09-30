import React from 'react'

const ProductCardPlaceholder = ({ count }: { count: number }) => {
    const placeholder: number[] = []
    for (let i = 0; i < count; i++) {
        placeholder.push(i)
    }
    return (
        <>
            {
                placeholder.map(() => <div className='flex flex-col items-center gap-4'>
                    <div className='w-[180px] h-[270px] bg-white dark:bg-black animate-pulse' />
                    <div className='w-[100px] h-[20px] bg-white dark:bg-black animate-pulse' />
                    <div className='w-[80px] h-[20px] bg-white dark:bg-black animate-pulse' />
                    <div className='w-[180px] h-[30px] rounded-full bg-white dark:bg-black animate-pulse' />
                </div>
                )
            }
        </>
    )
}

export default ProductCardPlaceholder