import styled from "styled-components";

export const ButtonBackContainer = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryText};
    margin: 0 15px;
    font-size: large;

    .back-button {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.primaryText};

        p {
            margin-bottom: 0;
        }
    }

    .icon {
        color: ${({ theme }) => theme.colors.primaryText};
        margin-right: 8px;
    }
`