import { FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

export const AllDiv = styled.div`
           display: flex;
           justify-content: center;
           background-color: ${props => props.theme.darkWhite};
           & > section {
               display: flex;
               background-color: ${props => props.theme.white};
               padding: 2rem;
               margin: 5rem 2rem;
               border-left: 3px solid ${props => props.theme.red};
               & > div {
                   margin-right: 4rem;
                   & > h2 {
                       font-size: 2.5rem;
                       line-height: 2;
                       text-transform: uppercase;
                       color: ${props => props.theme.red};
                   }
                   & > p {
                       font-size: 1.5rem;
                       color: ${props => props.theme.darkGrey};
                   }
               }
               & > div:last-child {
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   font-size: 3rem;
               }
               &:hover {
                   background-color: ${props => props.theme.red};
                   & > div {
                       & > h2 {
                           color: ${props => props.theme.white};
                       }
                       & > p {
                           color: ${props => props.theme.white};
                       }
                   }
                   & > div:last-child > * {
                       color: ${props => props.theme.white};
                   }
               }
           }
           ${({ theme }) => theme.tablet`
            flex-direction: column;
            & > section {
                margin: 2rem 2rem;
            }
    `}`;

export const StyledChevron = styled(FaChevronRight)`
    color: ${props => props.theme.red};
`;
