import styled from 'styled-components';

export const ThemedButton = styled.button`
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
  height: 40px;
  display: flex;

  > svg {
    height: 20px;
  }
`;