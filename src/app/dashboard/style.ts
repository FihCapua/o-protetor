import styled from 'styled-components';

export const Container = styled.div`
 padding: 20px;
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`

export const Block = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryText}; 
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
  flex: 1 1 45%; 
  min-height: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.highlightText};
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export const FullWidthBlock = styled(Block)`
  flex: 1 1 100%;
`;