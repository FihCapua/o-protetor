import styled from "styled-components";

export const ContainerMedicamentForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    > form {
        display: flex;
        flex-direction: column;

        > input {
            width: 350px;
            margin: 10px 0;
        }
    }
`