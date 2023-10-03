"use server"
import React from 'react'
import { cookies } from 'next/headers'
import ThemeButton from './ThemeButton'

export async function setCookie(theme:string) {
    cookies().set("theme", theme);
}

const ThemeToggler = () => {
    const themeCookie = cookies().get("theme") || { name: "", value: "" }
    return (
        <ThemeButton themeCookie={themeCookie} />
    )
}

export default ThemeToggler