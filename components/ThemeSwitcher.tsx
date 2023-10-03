"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";
const ThemeSwitcher = () => {
    // const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();
    const [showOptions, setShowOptions] = useState(false);
    // useEffect(() => {
    //     setMounted(true)
    // }, [])

    // if (!mounted) {
    //     return null
    // }

    return (
        <div className="relative">
            <div
                className="fixed bottom-4 right-4 z-50 p-2 rounded-full cursor-pointer bg-black dark:bg-white text-white dark:text-black"
                onClick={() => {
                    setShowOptions((prev) => !prev);
                }}
            >
                {theme == "dark" && <BsMoonStarsFill className=" w-8 h-8 " />}
                {theme == "light" && <BsSunFill className=" w-8 h-8 " />}
                {theme == "system" && <RiComputerFill className=" w-8 h-8 " />}
                {showOptions && (
                    <div className="absolute bottom-[74px] right-0 p-3 rounded-lg bg-gray-200 dark:bg-dark-container">
                        <button
                            aria-label="dark button"
                            type="button"
                            className="flex gap-2 p-1 justify-center items-center text-black dark:text-white"
                            onClick={() => {
                                setTheme("dark");
                            }}
                        >
                            <BsMoonStarsFill /> Dark
                        </button>
                        <button
                            aria-label="light button"
                            type="button"
                            className="flex gap-2 p-1 justify-center items-center text-black dark:text-white"
                            onClick={() => {
                                setTheme("light");
                            }}
                        >
                            <BsSunFill /> Light
                        </button>
                        <button
                            aria-label="system button"
                            type="button"
                            className="flex gap-2 p-1 justify-center items-center text-black dark:text-white"
                            onClick={() => {
                                setTheme("system");
                            }}
                        >
                            <RiComputerFill /> System
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ThemeSwitcher;
