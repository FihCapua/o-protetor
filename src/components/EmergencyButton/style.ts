import styled from "styled-components";

export const EmergencyButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledEmergencyButton = styled.button`
  background-color: #ffd700;
  color: #9b1c1c; 
  font-size: 1.5rem;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid #9b1c1c;

  span {
    color: #9b1c1c;
  }
`;