import { Text, Title } from "./style"
import { TextProps, TitleProps } from "@/types"

export const TitleComponent: React.FC<TitleProps> = ({ as = 'h1', children }) => {
    return <Title as={as}>{children}</Title>
}
  

export const TextComponent: React.FC<TextProps> = ({ as = 'p', children }) => {
    return <Text as={as}>{children}</Text>
}