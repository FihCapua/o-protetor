import styled from "styled-components";
import { TextProps, TitleProps } from "@/types";

export const Title = styled.h1<TitleProps>`
  font-size: ${({ as, theme }) => {
    switch (as) {
      case 'h1':
        return theme.fontSizes.large;
      case 'h2':
        return '1.75rem';
      case 'h3':
        return '1.5rem';
      case 'h4':
        return '1.25rem';
      case 'h5':
        return '1rem';
      case 'h6':
        return '0.875rem';
      default:
        return theme.fontSizes.medium;
    }
  }};
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.highlightText};
  margin: 0 0 ${({ theme }) => theme.spacing.medium} 0;
  padding: 0;
`;

export const Text = styled.p<TextProps>`
font-size: ${({ theme }) => theme.fontSizes.small};
color: ${({ theme }) => theme.colors.primaryText};

${({ as }) =>
  as === 'span' &&
  `
  display: inline;
`}

${({ as }) =>
  as === 'p' &&
  `
  margin-bottom: 1rem;
`}
`;