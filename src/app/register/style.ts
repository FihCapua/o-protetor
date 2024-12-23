import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 25px;
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

export const ErrorMessage = styled.div`
    color: white;
    background-color: red;
    padding: 8px;
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
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
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 5px;
`;
