import React, { createContext, useContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('mode')

        // console.log('Saved mode:', savedMode)

        if(savedMode) return savedMode
        const preferredMode = window.matchMedia('(prefers-color-scheme: light)').matches

        // console.log('Mode preferred:', preferredMode)

        return preferredMode ? 'light' : 'dark';
    })

    useEffect(() => {
        // console.log('Setting mode:', mode)

       document.documentElement.setAttribute('data-mode', mode)
       localStorage.setItem('mode', mode)
    }, [mode]);

    const toggleMode = () => setMode(prev => prev === 'dark' ? 'light' : 'dark')

    return (
        <ThemeContext.Provider value={{ mode, toggleMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useMode = () => useContext(ThemeContext);