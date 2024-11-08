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
    priority?: boolean 
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
    target?: string
    rel?: string
    children: React.ReactNode
}

export interface ButtonProps {
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    children: React.ReactNode
    onClick?: () => void
}

export interface ContactProps {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export interface InputFieldProps {
    label?: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}

export interface EmailResultProps {
    success: boolean;
    contact: string;
    error?: any;
}

export interface MedicationProps {
    id?: string;
    name: string;
    dosage: string;
    time: string;
    phoneNumber?: string;
}

export interface TipProps {
    id: number;
    tip: string;
    referenceLink: string;
};