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
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    > span {
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: -5px;
    }

    a {
        font-size: ${({ theme }) => theme.fontSizes.small};
        text-decoration: none;
        color: ${({ theme }) => theme.colors.buttonText};
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 50%;
    }
`
