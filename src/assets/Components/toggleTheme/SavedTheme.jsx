import React, { createContext, useState, useEffect } from 'react'

export const SavedTheme = createContext()

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const themeSaved = localStorage.getItem('theme')
        if (themeSaved) {
            setTheme(themeSaved)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.className = theme;
        // console.log('Theme applied:', theme);
    }, [theme])

    return (
        <SavedTheme.Provider value={{theme, setTheme}}>
            {children}
        </SavedTheme.Provider>
    )
}