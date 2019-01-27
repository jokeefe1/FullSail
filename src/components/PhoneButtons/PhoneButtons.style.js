import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledDiv = styled.div`
    display: flex;
    background-color: ${({theme}) => theme.darkGrey};
font-size: 2rem;
`;

export const StyledLink = styled(Link)`
    padding: 3rem;
    background-color: ${({theme}) => theme.white};
    border: 3px solid ${({theme}) => theme.yellow};
`;