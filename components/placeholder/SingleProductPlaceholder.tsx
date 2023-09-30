import React from 'react'

const SingleProductPlaceholder = () => {
    return (
        <>
            <div className='flex flex-col gap-5 items-end text-right bg-white dark:bg-black p-4 w-full lg:w-[400px] lg:sticky lg:top-[144px] lg:left-0 h-fit'>
                <div className='w-[90px] h-[20px] bg-gray-200 dark:bg-dark-container animate-pulse' />
                <div className='w-full h-[20px] bg-gray-200 dark:bg-dark-container animate-pulse' />
                <div className='w-full h-[20px] bg-gray-200 dark:bg-dark-container animate-pulse' />
                <div className='w-full h-[20px] bg-gray-200 dark:bg-dark-container animate-pulse' />
                <div className='w-full h-[20px] bg-gray-200 dark:bg-dark-container animate-pulse' />
                <div className='w-[90px] h-[20px] bg-gray-200 dark:bg-dark-container animate-pulse' />
                <div className='w-[120px] h-[20px] bg-gray-200 dark:bg-dark-container animate-pulse' />
                <div className='flex flex-row gap-4'>
                    <div className='w-[60px] h-[25px] bg-gray-200 dark:bg-dark-container animate-pulse rounded-full' />
                    <div className='w-[60px] h-[25px] bg-gray-200 dark:bg-dark-container animate-pulse rounded-full' />
                    <div className='w-[60px] h-[25px] bg-gray-200 dark:bg-dark-container animate-pulse rounded-full' />
                </div>
                <div className='w-full h-[40px] bg-gray-200 dark:bg-dark-container animate-pulse rounded-full' />
            </div>
            <div className="flex-1">
                <div className='grid grid-cols-2 gap-2'>
                    <div className="w-full h-[250px] sm:h-[500px] bg-white dark:bg-black animate-pulse" />
                    <div className="w-full h-[250px] sm:h-[500px] bg-white dark:bg-black animate-pulse" />
                    <div className="w-full h-[250px] sm:h-[500px] bg-white dark:bg-black animate-pulse" />
                    <div className="w-full h-[250px] sm:h-[500px] bg-white dark:bg-black animate-pulse" />
                </div>
            </div>
        </>
    )
}

export default SingleProductPlaceholder