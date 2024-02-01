import styled from 'styled-components';

export const HeaderActions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    @media screen and (min-width: 992px) {
        flex-direction: row;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const FormSearch = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (min-width: 992px) {
        
        max-width: 500px;

        .form-search-dropdown {
            max-width: 200px;
        }
    }
`;

export const FormActions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
`;