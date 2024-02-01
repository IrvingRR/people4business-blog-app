import { Link } from "react-router-dom";
import styled from "styled-components";

export const EntryRowElement = styled(Link)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid ${props => props.theme.borderColor};
    padding: 10px;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
    color: ${props => props.theme.fontColor};

    &:hover {
        transform: translateY(-5px);
        border-color: var(--primary-color);
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