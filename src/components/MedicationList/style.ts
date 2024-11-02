import styled from "styled-components";

export const ListMedicationsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListDetailsContainer = styled.div`
    margin: 0 auto;

    ul {
        list-style: none;
        padding: 0;

        > li {
            padding: ${({ theme }) => theme.spacing.small};
            background-color: ${({ theme }) => theme.colors.background};
            color: ${({ theme }) => theme.colors.primaryText};
            border-radius: ${({ theme }) => theme.borderRadius};
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            margin: ${({ theme }) => theme.spacing.medium} 0;

            p {
                margin-bottom: 0;
            }
        }
    }
`;