import { User } from "firebase/auth";
import { StaticImageData } from "next/image";

export interface AuthContextType {
    user: User | null
    loading: boolean
    logout: () => Promise<void>
}

export interface ThemeContextType {
    isDarkMode: boolean
    toggleTheme: () => void
}

export interface ImageProps {
    src: string | StaticImageData
    alt: string
    width?: number
    height?: number
}

export interface TitleProps {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    children: React.ReactNode
}

export interface TextProps {
    as?: 'p' | 'span'
    children: React.ReactNode
}

export interface LinkProps {
    href: string
    children: React.ReactNode
}

export interface ButtonProps {
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    children: React.ReactNode
    onClick?: () => void
}