import styled from "styled-components";

export const NotFoundContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h2 {
        font-size: var(--fs-xl);
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;