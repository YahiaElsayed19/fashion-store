import React from 'react'
import { cookies } from 'next/headers'
import ThemeButton from './ThemeButton'

const ThemeToggler = () => {
    const themeCookie = cookies().get("theme") || { name: "", value: "" }
    return (
        <ThemeButton themeCookie={themeCookie} />
    )
}

export default ThemeToggler