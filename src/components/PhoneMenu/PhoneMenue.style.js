import styled from 'styled-components';

export const MiddleSection = styled.div`
    display: none;
    & > h2 {
        padding: 2rem;
        text-align: center;
        color: ${({theme}) => theme.darkGrey};
    }
    ${({theme}) => theme.phone`
        display: inline-block;
    `}
`;

export const BottomSection = styled.div`
    background-color: ${({ theme }) => theme.white};
    & > div {
        display: flex;
        align-items: center;
        padding: 4rem;
        font-size: 6rem;
        color: ${({ theme }) => theme.yellow};
        border-top: 1px solid ${({ theme }) => theme.grey};
        &:last-child {
            border-bottom: 1px solid ${({ theme }) => theme.grey};
        }
        & > p {
            font-size: 2.3rem;
            padding-left: 2rem;
            color: ${({ theme }) => theme.darkGrey};
        }
        &:hover > * {
            color: ${({theme}) => theme.yellow};
        }
    }
`;
