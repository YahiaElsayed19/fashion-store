"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import Searchbar from "../Searchbar";
import AuthButton from "../AuthButton";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Header = () => {
    const [hideHeader, setHideHeader] = useState(false);
    useEffect(() => {
        const header = document.getElementById("header");
        let prevScrollY = 0;
        function handleScroll() {
            const currentScrollY = window.scrollY || document.documentElement.scrollTop;
            if (header) {
                setHideHeader(currentScrollY > prevScrollY)
                prevScrollY = currentScrollY <= 150 ? 150 : currentScrollY;
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, []);
    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: hideHeader ? -150 : 0 }}
            transition={{ duration: 0.3 }}
            id="header"
            className="sticky top-0 left-0 bg-white dark:bg-black shadow flex h-[64px] sm:h-auto z-50 scroll-smooth"
        >
            <div className="container mx-auto max-w-5xl flex flex-1 flex-col sm:gap-2 px-[15px] py-4">
                <div className="flex flex-1 items-center justify-between gap-2 flex-row">
                    <MobileNav />
                    <div className="logo flex gap-2 items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/assets/logo-black.png"
                                width={100}
                                height={100}
                                alt="logo"
                                className="dark:hidden object-contain "
                            />
                            <Image
                                src="/assets/logo-white.png"
                                width={100}
                                height={100}
                                alt="logo"
                                className="hidden dark:block object-contain"
                            />
                        </Link>
                    </div>
                    <Navigation />
                    <AuthButton />
                </div>
                <div className="max-sm:hidden">
                    <Searchbar />
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
