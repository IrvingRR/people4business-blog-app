import styled from "styled-components";

export const EntryCardElement = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid ${props => props.theme.borderColor};
    padding: 10px;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        transform: translateY(-5px);
        border-color: var(--primary-color);
    }

    @media screen and (min-width: 768px) {
        max-width: 350px;
    }

    @media screen and (min-width: 992px) {
        max-width: 300px;
    }

    h2 {
        font-size: var(--fs-lg);
    }
`;

export const EntryHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--fs-sm);

    .entry-author {
        color: var(--primary-color);
    }

    .entry-publication-date {
        color: ${props => props.theme.fontSecondaryColor};
    }
`;

export const EntryBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    color: ${props => props.theme.fontSecondaryColor};
    line-height: 22px;
    font-size: var(--fs-md);
`;