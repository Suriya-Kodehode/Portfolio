import React, { createContext, useContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')

        // console.log('Saved theme:', savedTheme)

        if(savedTheme) return savedTheme
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

        // console.log('Theme preferred:', preferredTheme)

        return preferredTheme ? 'dark' : 'light';
    })

    useEffect(() => {
        // console.log('Setting theme:', theme)

       document.documentElement.setAttribute('data-theme', theme)
       localStorage.setItem('theme', theme)
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);