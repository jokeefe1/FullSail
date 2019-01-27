import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';


export const AllDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.darkWhite};
    & > section {
        display: flex;
        background-color: ${props => props.theme.white};
        padding: 4rem;
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
            font-size: 8rem;
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
        ${({ theme }) => theme.tabletLarge`
                    ;
               `}
    }
`;

export const StyledChevron = styled(FaChevronRight)`
    -webkit-text-stroke: 2px #fff000;
`;

