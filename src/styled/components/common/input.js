import styled, {css} from 'styled-components';

export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const InputContent = styled.div`
    width: 100%;
    height: 40px;
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
`;

export const Legend = styled.div`
    color: var(--error-color);
    font-size: var(--fs-sm);
`;