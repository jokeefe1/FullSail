import styled from 'styled-components'

export const StyledDivider = styled.div`
    display: block;
    margin: 6rem auto;
    border-bottom: 3px solid ${props => props.theme.yellow};
    width: 40px;
`;