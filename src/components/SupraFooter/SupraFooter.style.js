import styled from 'styled-components';

export const AllDiv = styled.div`
          display: flex;
          justify-content: space-around;
           background-color: ${props => props.theme.darkWhite};
           & > section {
               display: flex;
               width: 35%;
               background-color: ${props => props.theme.white};
               padding: 4rem;
               margin: 5rem 0;
               border-left: 3px solid ${props => props.theme.red};
               & > div {
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
                   width: 4rem;
                   height: 4rem;
                   border-top: 1px solid ${props => props.theme.red};
                   border-right: 1px solid ${props => props.theme.red};
                   transform: rotate(45deg);
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
                   & > div:last-child {
                       border-top: 1px solid ${props => props.theme.white};
                       border-right: 1px solid ${props => props.theme.white};
                   }
               }
           }`;
