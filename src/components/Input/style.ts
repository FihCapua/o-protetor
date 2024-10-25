import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const StyledInput = styled.input`
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
        border-color: #0f4789;
        outline: none;
    }
`;