import styled from "styled-components";

export const FullWidthBlock = styled.div`
  width: 100%;
  padding: 20px;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  justify-content: center;
`;

export const GameCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
  padding: 10px;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const GameImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const GameTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.highlightText};
`;

export const GameCategory = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

export const ButtonComponent = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
`;