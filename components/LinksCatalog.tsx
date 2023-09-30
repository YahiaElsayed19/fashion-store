import React from 'react'
import Link from 'next/link';
const LinksCatalog = ({ links, title }: {
    links: {
        title: string; url: string
    }[], title: string
}) => {
    return (
        <div className="min-h-screen bg-white dark:bg-black font-bold text-center py-[100px]">
            <h1 className="text-black dark:text-white text-2xl uppercase">All <span className="text-primary">{title }</span> </h1>
            <div className="flex justify-center items-center flex-wrap gap-4 p-5 mx-auto">
                {links.map((link: { title: string; url: string }) => (
                    <Link
                        key={link.title}
                        href={link.url}
                        className="text-black dark:text-white bg-gray-200 dark:bg-dark-container hovertext-white hover:bg-primary duration-300 text-center py-3 px-5 w-[150px] rounded-full"
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LinksCatalog