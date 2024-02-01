import styled from "styled-components";

export const ConfirmModalCard = styled.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: var(--radius);
`;

export const ConfirmModalHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
`;

export const ConfirmModalContent = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
`;

export const ConfirmModalActions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
    padding: 10px;
`;