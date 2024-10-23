import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  width: 100%;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #0070f3;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #005bb5;
  }
`;

export const ErrorMessage = styled.div`
    color: white;
    background-color: red;
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 5px;
`;

export const SuccessMessage = styled.div`
    color: white;
    background-color: green;
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 5px;
`;