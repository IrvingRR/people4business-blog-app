import styled from 'styled-components';
import { spinnerAnimation } from '../../animations';

export const WrapperLoader = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: ${props => props.theme.backgroundColor};
`;

export const Spinner = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 2px solid ${props => props.theme.backgroundElementsColor};
    border-right-color: var(--primary-color);
    animation: 1s ${spinnerAnimation} infinite linear;
`;