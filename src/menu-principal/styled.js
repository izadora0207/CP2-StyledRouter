import styled from 'styled-components';


export const DivHome = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
 
`

export const Img = styled.img`
    height: 340px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    max-width: 100%;
    &:hover{
        -webkit-animation-duration: 0.8s;
        -moz-animation-duration: 0.8s;
        animation-duration: 0.8s;
        -webkit-animation-fill-mode: both;
        -moz-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-name: tada !important;
        -moz-animation-name: tada !important;
        animation-name: tada !important;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
    }

`

