import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: ${props => props.theme.darkGrey};
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const ImgDiv = styled.div`
    display: block;
    & > img {
        width: 22rem;
        padding: 4rem 2rem 1rem;
    }
    ${({ theme }) => theme.tabletLarge`
        padding: 2rem;
    `}
`;

export const FirstDiv = styled.div`
    font-size: 2rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.white};
    padding: 1rem;
    & > span {
        margin: 1rem;
    }
`;

export const AllDiv = styled.div`
           display: flex;
           color: ${props => props.theme.white};
           font-size: 1.5rem;
           line-height: 1.5;
           
           padding-bottom: 2rem;
           & > section{
               width: 100%;
           }
           & > section:first-child {
               width:30%;
               & > div {
                   padding-right: 2rem;
                   padding-left: 2rem;
                   border-right: 1px solid ${props => props.theme.lightGrey};
                   & > p {
                       /* padding: 0 2rem 2rem; */
                   }
                   & > div {
                       display: flex;
                       justify-content: space - between;
                       padding-bottom: 3rem;
                       & > p {
                           padding-right: 2rem;
                           & > span {
                               color: ${props => props.theme.yellow};
                           }
                       }
                   }
                   & > button {
                       padding: 1rem;
                       width: 12rem;
                       height: 5rem;
                       text-align: center;
                       font-size: 1.3rem;
                       font-weight: bold;
                       text-transform: uppercase;
                       border: none;
                       color: ${props => props.theme.white};
                       background-color: ${props => props.theme.darkestGrey};
                       &:hover {
                           background-color: ${props => props.theme.yellow};
                       }
                   }
                   ${({ theme }) => theme.tabletLarge`
                    display: flex;
                    justify-content: baseline;
                    border-right: none;
                    border-bottom: 1px solid ${props => props.theme.lightGrey};
                `}
               }
           }
           & > section:last-child {
               & > div {
                   display: flex;
                   justify-content: space-between;
                   list-style: none;
                   & > div {
                       display: flex;
                       justify-content: space-between;
                       &:first-child {
                           padding-left: 1rem;
                       }
                       & > ul {
                           padding: 0 0.5rem 1.25rem 0;
                           font-size: 1.2rem;
                           & > li {
                               padding: 0.6rem 0;
                           }
                       }
                   }
               }
               & > span {
                   padding: 1rem 0;
               }
           }
           ${({ theme }) => theme.tabletLarge`
            flex-direction: column;
            padding: 2rem;
    `}`;

export const SubFooter = styled.div`
    background-color: ${props => props.theme.darkestGrey};
    color: ${props => props.theme.white};
    padding: 2rem;
    & > div > ul {
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;
    }
    & > div > p {
        text-align: center;
    }
`;
