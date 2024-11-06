import styled from "styled-components";

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.medium};

    p {
        text-align: center;
    }
`;

export const ContainerCardTips = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText}; 
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
  flex: 1 1 45%; 
  min-height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-style: italic;
  margin: 0 auto;
  width: 50%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.highlightText};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-style: normal;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    width: 95%;
  }
`;