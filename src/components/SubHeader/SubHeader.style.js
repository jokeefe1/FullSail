import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledSubHeader = styled.div`
    width: 100%;
    height: 16rem;

    p {
        font-size: 2.3rem;
        padding: 8.75rem 0;
        font-weight: 300;
        line-height: 1.5;
        color: ${props => props.theme.darkGrey};

}`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.red};

    &:hover {
        color: ${props => props.theme.darkGrey};
    }
`;