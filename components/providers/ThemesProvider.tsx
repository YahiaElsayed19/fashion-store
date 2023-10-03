"use client"
import React, { useState, useEffect } from "react";
import { ThemeProvider } from 'next-themes'
const ThemesProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // if (!mounted) {
    //     return null
    // }

    return (
        <ThemeProvider attribute="class">{children}</ThemeProvider>
    )
}

export default ThemesProvider