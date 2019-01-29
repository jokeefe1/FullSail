import styled from 'styled-components';

export const ImgContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 5rem;
   
    ${({ theme }) => theme.tabletLarge`
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 0;
        & > a:nth-child(3n + 1){
            grid-column: 1 / 3;
    }
    `}
    ${({ theme }) => theme.phone`
        grid-template-columns: 1fr;
        grid-row-gap: 0;
         & > a:nth-child(3n){
            grid-column: 1 ;
    }
    `}
`;
