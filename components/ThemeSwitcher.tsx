"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="relative">
            <div
                className="fixed bottom-4 right-4 z-50 p-2 rounded-full cursor-pointer bg-dark-container dark:bg-white text-white dark:text-black"
                onClick={() => {
                    setShowOptions((prev) => !prev);
                }}
            >
                <BsMoonStarsFill className="theme-icon" />
                {showOptions && (
                    <div className="absolute bottom-[64px] right-0 rounded-lg bg-gray-200 dark:bg-dark-container">
                        <button
                            aria-label="dark button"
                            type="button"
                            className={`theme-button ${theme === "dark" ? "text-primary" : "text-black dark:text-white"
                                }`}
                            onClick={() => {
                                setTheme("dark");
                            }}
                        >
                            <BsMoonStarsFill /> Dark
                        </button>
                        <button
                            aria-label="light button"
                            type="button"
                            className={`theme-button ${theme === "light"
                                    ? "text-primary"
                                    : "text-black dark:text-white"
                                }`}
                            onClick={() => {
                                setTheme("light");
                            }}
                        >
                            <FaSun /> Light
                        </button>
                        <button
                            aria-label="system button"
                            type="button"
                            className={`theme-button ${theme === "system"
                                    ? "text-primary"
                                    : "text-black dark:text-white"
                                }`}
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
