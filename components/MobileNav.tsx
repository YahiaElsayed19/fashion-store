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
        function clickOutside(event: Event) {
            let icon = document.getElementById('icon');
            let searchbar = document.getElementById('Searchbar');
            //@ts-ignore
            if (icon && !icon.contains(event.target) && searchbar && !searchbar.contains(event.target)) {
                closeMenuHandler()
            }
        }
        function scrollHandler(event: Event) {
            closeMenuHandler()
        }
        document.addEventListener('click', clickOutside)
        window.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('click', clickOutside)
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <div className="sm:hidden ">
            <CgMenu
                className="w-8 h-8 text-black dark:text-white sm:hidden cursor-pointer"
                onClick={toggleMenuHandler}
                id="icon"
            />
            {showMenu && (
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 5 }}
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
