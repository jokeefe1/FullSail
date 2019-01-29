import Carousel from 'nuka-carousel';
import styled from 'styled-components';

export const StyledCarousel = styled(Carousel)`
    & .slider-control-bottomcenter {
        position: absolute;
        top: 20px;
        left: 20px !important;
        & > ul {
            position: absolute !important;
            & > li > button {
                color: ${({ theme }) => theme.yellow} !important;
            }
        }
    }
    & .slider-control-centerleft {
        display: none;
    }
    & .slider-control-centerright {
        display: none;
    }
    & .slider-list {
        max-height: 440px !important;
    }
`;
