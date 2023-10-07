import React from 'react'

const ProductCardPlaceholder = ({ count }: { count: number }) => {
    const placeholder: number[] = []
    for (let i = 0; i < count; i++) {
        placeholder.push(i)
    }
    return (
        <>
            {
                placeholder.map((i) => <div key={i} className='flex flex-col items-center gap-5'>
                    <div className='max-sm:w-[120px] w-[180px] max-sm:h-[200px] h-[270px] bg-white dark:bg-black animate-pulse' />
                    <div className='w-[100px] h-[20px] bg-white dark:bg-black animate-pulse' />
                    <div className='w-[80px] h-[20px] bg-white dark:bg-black animate-pulse' />
                    <div className='max-sm:w-[120px] w-[180px] h-[30px] rounded-full bg-white dark:bg-black animate-pulse' />
                </div>
                )
            }
        </>
    )
}

export default ProductCardPlaceholder