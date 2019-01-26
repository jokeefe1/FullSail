import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledSubHeader = styled.div`
    width: 100%;
    height: 10rem;

    p {
        font-size: 2.3rem;
        text-align: center;
        padding: 5.75rem 0;
        font-weight: 300;
        line-height: 1.5;
        color: ${props => props.theme.lightGrey};

}`;

export const StyledLink = styled(Link)`
    color: ${props => props.theme.red};

    &:hover {
        color: ${props => props.theme.darkGrey};
    }
`;