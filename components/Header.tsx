"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import Searchbar from "./Searchbar";
import AuthButton from "./AuthButton";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="bg-white dark:bg-black shadow flex h-[64px] sm:h-auto z-50">
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
        </header>
    );
};

export default Header;
