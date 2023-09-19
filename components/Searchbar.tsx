import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
const Searchbar = () => {
    return (
        <form className='flex flex-1 flex-col items-center justify-center relative'>
            <input type="text" placeholder='search' className='w-full bg-gray-200 ps-14 pr-5 py-3 rounded-full focus:outline-none ' />
            <button className='absolute top-[50%] translate-y-[-50%] left-2 rounded-full p-2'>
                {""} <RiSearchLine className=" text-primary-color w-6 h-6 cursor-pointer" />
            </button>
        </form>
    )
}

export default Searchbar