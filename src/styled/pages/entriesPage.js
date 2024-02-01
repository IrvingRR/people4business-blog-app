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

export const EntriesGallery = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

`;