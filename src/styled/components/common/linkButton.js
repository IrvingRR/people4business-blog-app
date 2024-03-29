import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

export const LinkButtonElement = styled(Link)`
    padding: 8px 10px;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: var(--primary-color);
    color: var(--white-color);
    position: relative;

    &:hover { 
        background-color: var(--primary-color-hover);
    }

    ${props => {
        switch (props.variant) {
            case 'secondary':
                return css`
                    background-color: var(--secondary-color);
                    &:hover { background-color: var(--secondary-color-hover); }
                `

            case 'outlined':
                return css`
                    background-color: transparent;
                    color: var(--primary-color);
                    border-color: var(--primary-color);

                    &:hover {
                        background-color: transparent;
                        border-color: var(--primary-color-hover);
                        color: var(--primary-color-hover);
                    }
                `

            case 'secondary-outlined':
                return css`
                    background-color: transparent;
                    color: var(--secondary-color);
                    border-color: var(--secondary-color);

                    &:hover {
                        background-color: transparent;
                        border-color: var(--secondary-color-hover);
                        color: var(--secondary-color-hover);
                    }
                `
            case 'text':
                return css`
                    background-color: transparent;
                    color: ${props => props.theme.fontColor};

                    &:hover {
                        background-color: transparent;
                        color: var(--primary-color);
                    }
                `;

            case 'text-secondary':
                return css`
                    background-color: transparent;
                    color: ${props => props.theme.fontColor};

                    &:hover {
                        background-color: transparent;
                        color: var(--secondary-color);
                    }
                `;

            case 'plain':
                return css`
                    background-color: transparent;
                    color: ${props => props.theme.fontColor};

                    &:hover {
                        background-color: ${props => props.theme.backgroundElementsColor};
                    }
                `;
            default:
                break;
        }
    }}
`;