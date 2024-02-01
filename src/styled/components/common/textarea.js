import styled, {css} from 'styled-components';

export const TextareaGroup = styled.div`
    width: 100%;
    max-width: ${props => props.max_width};
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TextareaContent = styled.div`
    width: 100%;
    height: 200px;
`;

export const TextareaElement = styled.textarea`
    width: 100%;
    height: 200px;
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
    }

    ${props => props.error && css`
        border-color: var(--error-color) !important;
        color: var(--error-color) !important;
    `}

    ${props => props.rounded && css`border-radius: var(--radius-rounded);`}
`;

export const Legend = styled.div`
    color: var(--error-color);
    font-size: var(--fs-sm);
`;