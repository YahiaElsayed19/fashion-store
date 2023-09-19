import React from 'react'
import Link from 'next/link'
import { AiFillHeart } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'

const Navigation = () => {
    return (
        <nav className='flex gap-3 items-center'>
            <Link href="/favorite" className='nav-link'>
                <AiFillHeart className='nav-icon' />
            </Link>
            <Link href="/cart" className='nav-link '>
                <FaShoppingCart className='nav-icon' />
            </Link>
            <Link href="/profile" className='nav-link '>
                <IoPerson className='nav-icon' />
            </Link>
        </nav>)
}

export default Navigation