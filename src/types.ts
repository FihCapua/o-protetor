import { User } from "firebase/auth";

export interface AuthContextType {
    user: User | null
    loading: boolean
    logout: () => Promise<void>
}

export interface ThemeContextType {
    isDarkMode: boolean
    toggleTheme: () => void
}