import styled from "styled-components";
import { ButtonProps } from "@/types";

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant, theme }) => 
    variant === 'secondary' 
        ? theme.colors.highlightText
        : theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return theme.spacing.small;
      case 'large':
        return theme.spacing.large;
      default:
        return theme.spacing.medium;
    }
  }};
  font-size: ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return theme.fontSizes.small;
      case 'large':
        return theme.fontSizes.large;
      default:
        return theme.fontSizes.medium;
    }
  }};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '180px')};
  height: 35px;
`;