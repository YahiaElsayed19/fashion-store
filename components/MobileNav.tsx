"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { links } from "@util/links";
import Searchbar from "./Searchbar";
import { motion } from "framer-motion";

const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenuHandler = () => {
        setShowMenu((prev) => !prev);
    };
    const closeMenuHandler = () => {
        setShowMenu(false);
    };
    const pathname = usePathname();

    useEffect(() => {
        document.addEventListener('click', function clickOutside(event: Event) {
            let menu = document.getElementById('menu');
            let searchbar = document.getElementById('Searchbar');
            //@ts-ignore
            if (menu && !menu.contains(event.target) && searchbar && !searchbar.contains(event.target)) {
                closeMenuHandler()
            }
        })
    }, [])

    return (
        <div className="sm:hidden z-40">
            <CgMenu
                className="w-8 h-8 text-black dark:text-white sm:hidden cursor-pointer"
                onClick={toggleMenuHandler}
                id="menu"
            />
            {showMenu && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col w-full h-auto p-4 gap-2 absolute top-[64px] left-0  bg-white dark:bg-black"
                >
                    <nav className="flex flex-col gap-2 text-center">
                        {links.map((link) => (
                            <Link
                                key={link.title}
                                href={link.url}
                                className={pathname == link.url ? "active-link" : "nav-link"}
                                onClick={closeMenuHandler}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                    <div id="Searchbar">
                        <Searchbar />
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default MobileNav;
