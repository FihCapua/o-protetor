import styled from "styled-components";
import { ButtonProps } from "@/types";

export const Button = styled.button<ButtonProps  & { $variant?: 'primary' | 'secondary'; $fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
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
        return theme.fontSizes.small;
    }
  }};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '180px')};
  height: 35px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;