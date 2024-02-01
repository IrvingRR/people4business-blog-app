import styled, {css} from 'styled-components';

export const Form = styled.form`
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-size: var(--fs-xl);
        padding: 10px 0;
    }
`;

export const GridInputs = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
`;

export const Actions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    a {
        font-size: var(--fs-sm);
    }

    ${props => props.justify='end' && css`
        justify-content: flex-end;
    `}
`;