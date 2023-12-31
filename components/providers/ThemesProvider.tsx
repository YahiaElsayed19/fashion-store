"use client"
import React from "react";
import { ThemeProvider } from 'next-themes'
const ThemesProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>
    )
}

export default ThemesProvider