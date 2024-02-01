import styled from "styled-components";

export const EntryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const HeaderActions = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const EntryHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const EntryInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .entry-author {
        color: var(--primary-color);
    }

    .entry-publication-date,
    .entry-separator {
        color: ${props => props.theme.fontSecondaryColor};
    }
`;

export const EntryBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    line-height: 20px;
    text-align: justify;
    max-height: 65vh;
    overflow: auto;
`;