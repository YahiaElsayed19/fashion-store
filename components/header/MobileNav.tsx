"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { navLinks } from "@util/links";
import Searchbar from "@components/Searchbar";
import { AnimatePresence, motion } from "framer-motion";

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
            if (icon && !icon.contains(event.target as Element) && searchbar && !searchbar.contains(event.target as Element)) {
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
            <AnimatePresence mode="wait">
                {showMenu && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col w-full h-auto p-4 gap-2 absolute top-[64px] left-0  bg-white dark:bg-black"
                    >
                        <nav className="flex flex-col gap-2 text-center">
                            {navLinks.map((link) => (
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
                            <Searchbar closeMenuHandler={closeMenuHandler}/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;
