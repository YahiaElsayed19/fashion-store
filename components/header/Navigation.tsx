import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@util/links'
const Navigation = () => {
    const pathname = usePathname()
    return (
        <nav className='flex gap-3 items-center max-sm:hidden'>
            {navLinks.map((link) => <Link key={link.title} href={link.url} className={pathname == link.url ? "active-link" : "nav-link"}>{link.title}</Link>)}
        </nav>)
}

export default Navigation