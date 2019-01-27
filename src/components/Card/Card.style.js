import styled from 'styled-components';

export const ImgContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 5rem;
    ${({ theme }) => theme.tabletLarge`
      grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
    `}
    ${({ theme }) => theme.tablet`
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
    `}
    ${({ theme }) => theme.phone`
        grid-template-columns: 1fr;
        grid-row-gap: 0;
    `}
`;
