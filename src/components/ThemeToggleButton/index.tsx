import { useTheme } from "@/providers/ThemeProvider"
import { ThemedButton, ThemedButtonContainer } from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const ThemeToggleButton = () => {
    const { isDarkMode, toggleTheme } = useTheme()

    return (
      <ThemedButtonContainer>
        <ThemedButton onClick={toggleTheme}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </ThemedButton>
      </ThemedButtonContainer>
    )
}