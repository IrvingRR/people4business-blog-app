import styled, {css} from 'styled-components';

export const InputGroup = styled.div`
    width: 100%;
    max-width: ${props => props.max_width};
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const InputContent = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        left: 15px;
        font-size: var(--fs-md);
        color: ${props => props.theme.placeholderColor};
    }
`;

export const InputElement = styled.input`
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    border-radius: var(--radius);
    border-color: ${props => props.theme.borderColor};
    background-color: transparent;
    color: ${props => props.theme.fontColor};

    &::placeholder {
        color: ${props => props.theme.placeholderColor};
    }

    &:focus {
        border-color: var(--primary-color);

        & ~ svg { color: var(--primary-color); }
    }

    &:disabled {
        color: ${props => props.theme.backgroundElementsColor};
        border-color: ${props => props.theme.backgroundElementsColor};
    }

    ${props => props.icon && css`
        padding: 10px 20px 10px 35px;
    `}

    ${props => props.error && css`
        border-color: var(--error-color) !important;
        color: var(--error-color) !important;
        
        & ~ svg {
            color: var(--error-color) !important;
        }
    `}

    ${props => props.rounded && css`border-radius: var(--radius-rounded);`}

`;

export const Legend = styled.div`
    color: var(--error-color);
    font-size: var(--fs-sm);
`;