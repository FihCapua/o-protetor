'use client'

import { createContext, useContext, useState } from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "@/styles/theme"
import { ThemeContextType } from "@/types"

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev)
    }

    const theme = isDarkMode ? darkTheme : lightTheme

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if(!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }

    return context
}