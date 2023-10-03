"use client"
import React from 'react'
import { setCookie } from './ThemeToggler'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
const ThemeButton = ({ themeCookie }: { themeCookie: { name: string, value: string } }) => {
    return (
        <>
            {themeCookie.value == "light" && <button
                aria-label='theme toggler'
                onClick={() => {
                    setCookie("dark")
                }}>
                <BsMoonStarsFill className='theme-button bg-black text-white'
                />
            </button>}
            {themeCookie.value == "dark" && <button
                aria-label='theme toggler'
                className='theme-button'
                onClick={() => {
                    setCookie("light")
                }}>
                <BsSunFill className='theme-button bg-white text-black'
                />
            </button>}
        </>
    )
}

export default ThemeButton