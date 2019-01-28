import styled from 'styled-components'
import { MdMenu } from 'react-icons/md';


export const StyledMenu = styled(MdMenu)`
    font-size: 3.5rem;
    color: ${({theme}) => theme.yellow};
    ${({theme}) => theme.desktop`
        display: none;
    `}
    ${({theme}) => theme.tabletLarge`
        display: inline-block;
    `}
     ${({ theme }) => theme.tablet`
        display: inline-block;
    `}
     ${({ theme }) => theme.phone`
        display: inline-block;
    `}
`;