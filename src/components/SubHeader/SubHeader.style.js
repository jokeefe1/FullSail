import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSubHeader = styled.div`
    width: 100%;

    p {
        font-size: 2.3rem;
        text-align: center;
        padding: 5.75rem 0 3rem;
        font-weight: 300;
        line-height: 1.5;
        color: ${props => props.theme.lightGrey};
    }
    ${({ theme }) => theme.tabletLarge`
    width: 100%;
    min-height: 150px;
    `}
`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.red};

    &:hover {
        color: ${props => props.theme.darkGrey};
    }
`;
