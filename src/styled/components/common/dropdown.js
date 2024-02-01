import styled, {css} from "styled-components";

export const DropdrownContainer = styled.div`
    width: 100%;
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    padding: 10px 20px;
    border: 1px solid ${props => props.theme.borderColor};
    cursor: pointer;
    border-radius: var(--radius);
    font-size: var(--fs-md);
    position: relative;

    svg {
        font-size: var(--fs-md);
    }
`;

export const Options = styled.ul`
    width: 100%;
    max-height: 200px;
    overflow: auto;
    border-radius: var(--radius);
    position: absolute;
    transition: var(--transition);
    border: 1px solid ${props => props.theme.borderColor};
    top: 40px;
    right: 0;
    transform: translateY(-5px);
    opacity: 0;
    visibility: hidden;

    ${props => props.visible && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const Option = styled.li`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: var(--fs-md);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        background-color: var(--primary-color);
    }
`;

export const Legend = styled.div`
    padding: 10px 20px;
`;