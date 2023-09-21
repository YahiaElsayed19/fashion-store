import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { links } from '@util/links'
const Navigation = () => {

    return (
        <nav className='flex gap-3 items-center max-sm:hidden'>
            {links.map((link) => <Link href={link.url} className='nav-link'>{link.title}</Link>)}
        </nav>)
}

export default Navigation