import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    //desktop-navigation
    return (
        <nav className='flex gap-3 items-center max-sm:hidden'>
            <Link href="/favorite" className='nav-link'>
                Favorites
            </Link>
            <Link href="/cart" className='nav-link '>
                Cart
            </Link>
            <Link href="/profile" className='nav-link '>
                Profile
            </Link>
        </nav>)
}

export default Navigation