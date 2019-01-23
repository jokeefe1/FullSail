import styled from 'styled-components'

export const StyledFooter = styled.footer`
    background-color: ${props => props.theme.darkGrey};
`;

export const ImgDiv = styled.div`
    display: block;
    width: 20%;
    padding: 2rem;
`;

export const AllDiv = styled.div`
    display: flex;
    color: ${props => props.theme.white};
    & > div {
        padding: 1rem;
    }

`;



export const FirstDiv = styled.div`
    font-size: 2rem;
`;