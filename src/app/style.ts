import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: ${({ theme }) => theme.spacing.small};
    }

    p {
        padding: ${({ theme }) => theme.spacing.small};
        text-align: center;
    }
`

export const LinkComponent = styled.div`
    display: flex;

    a {
        font-size: ${({ theme }) => theme.fontSizes.small};
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primaryText};
        cursor: pointer;
    }
`