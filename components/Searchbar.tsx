import React from 'react'

const Searchbar = () => {
    return (
        <form className='flex flex-1 flex-col items-center justify-center'>
            <input type="text" placeholder='search' className='w-full bg-gray-200 px-8 py-3 rounded-full focus:outline-none'/>
        </form>
    )
}

export default Searchbar