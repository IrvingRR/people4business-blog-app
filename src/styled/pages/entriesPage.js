import styled from 'styled-components';

export const HeaderActions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
`;

export const EntriesList = styled.ul`
    width: 100%;
    max-height: 70vh;
    overflow: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
`;