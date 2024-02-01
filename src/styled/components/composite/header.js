import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderElement = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
`;

export const Logo = styled(Link)`
    font-size: var(--fs-lg);
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${props => props.theme.fontColor};
    font-weight: bold;

    svg {
        font-size: var(--fs-lg);
        color: var(--primary-color);
    }
`;