"use client"
import React, { useState } from 'react'
import Link from "next/link"
import { CgMenu } from 'react-icons/cg'
import { usePathname } from 'next/navigation'
import { links } from '@util/links'
import Searchbar from './Searchbar'
const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(true)
    const toggleMenuHandler = () => {
        setShowMenu((prev) => !prev)
    }
    const pathname = usePathname()
    return (
        <div className='sm:hidden z-50'>
            <CgMenu className="w-8 h-8 text-black dark:text-white sm:hidden cursor-pointer" onClick={toggleMenuHandler} />
            {showMenu && <div className='flex flex-col w-full h-auto p-4 gap-2 absolute top-[64px] left-0  bg-white dark:bg-black'>
                <nav className='flex flex-col gap-2 text-center'>
                    {links.map((link) => <Link href={link.url} className={pathname == link.url ? "active-link" : "nav-link"}>{link.title}</Link>)}
                </nav>
                <div>
                    <Searchbar />
                </div>
            </div>}

        </div>
    )
}

export default MobileNav