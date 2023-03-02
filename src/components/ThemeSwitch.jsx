import React, { useEffect, useState } from 'react'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';

const ThemeSwitch = () => {
    const [theme, setTheme] = useState('')
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    useEffect(() => {
        const _theme = localStorage.theme;
        setTheme(_theme)
    }, [])

    const toggleTheme = () => {
        if (theme !== 'dark') {
            setTheme('dark')
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light');
        }
    }

    const onWindowMatch = () => {
        if (localStorage.theme === "dark" || (!"theme" in localStorage && darkQuery.matches)) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }

    onWindowMatch()
    return (
        <button onClick={toggleTheme}>
            {theme === 'dark' ? <div className='text-xl p-2 bg-gray-400 rounded text-yellow-500'> <BsFillSunFill /></div> : <div className='text-xl p-2 bg-gray-400 rounded'> <BsMoonFill /></div>}
        </button>

    )
}

export default ThemeSwitch