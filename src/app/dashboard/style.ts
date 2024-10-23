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
background-color: #f0f0f0;
color: #333;
border-radius: 12px;
padding: 20px;
flex: 1 1 45%; 
min-height: 150px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
text-align: center;

@media (max-width: 768px) {
  flex: 1 1 100%;
}
`;

export const FullWidthBlock = styled(Block)`
  flex: 1 1 100%;
`;

export const Button = styled.button`
padding: 15px 20px;
font-size: 1.5rem;
background-color: #0070f3;
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
margin-top: 10px;

&:hover {
  background-color: #005bb5;
}
`;