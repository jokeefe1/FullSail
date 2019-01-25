import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 650px;
    margin: 0 auto;
`;

export const StyledDiv = styled.div`
    background-image: url('https://res.cloudinary.com/john-okeefe/image/upload/v1547931616/fullsail/slide_01.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    color: ${props => props.theme.white};
`;

export const TopSection = styled.section`
    padding: 10rem;
    & > h1 {
        font-size: 6rem;
        padding-bottom: 2rem;
    }
    & > p {
        font-size: 1.5rem;
        width: 50%;
        padding-bottom: 2rem;
    }
`;

export const MiddleSection = styled.section`
    display: flex;
    justify-content: center;  
    padding-bottom: 3rem;
    & > h2 {
        font-size: 2.5rem;
    }
`;

export const BottomSection = styled.section`
    display: flex;
    justify-content: space-around;
`;