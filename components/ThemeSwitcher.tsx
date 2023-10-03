"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    // if (!mounted) {
    //     return null
    // }

    return (
        <div>
            <button
                type="button"
                className="fixed bottom-4 right-4 z-50 bg-black text-white p-3 rounded-full"
                onClick={() => {
                    setTheme("light");
                }}
            >
                Light theme
            </button>
            <button
                type="button"
                className="fixed bottom-4 left-4 z-50 bg-black text-white p-3 rounded-full"
                onClick={() => {
                    setTheme("dark");
                }}
            >
                dark theme
            </button>
            <button
                type="button"
                className="fixed bottom-4 left-[50%] translate-x-[-50%] z-50 bg-black text-white p-3 rounded-full"
                onClick={() => {
                    setTheme("system");
                }}
            >
                system theme
            </button>
        </div>
    );
};

export default ThemeSwitcher;
