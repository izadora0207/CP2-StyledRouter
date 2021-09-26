import styled from "styled-components";

export const ProdutosFem = styled.div`
    height: 350px;
    border-radius: 7px;
    margin-right: 25px;
    margin-bottom: 45px;

    img{
        height: 100%;
        border-radius: 3px;
    }
`;

export const Container = styled.body`
    background-color: #fff;
    color: #000;
`

export const ProdutosAll = styled.div`
    display: grid;
    grid-gap: 14px;;
    max-width: 1280px;
    margin: 0 auto;

    @media (min-width: 989px){
        grid-template-columns: repeat(4,minmax(0,1fr));
    }

    @media (max-width: 988px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`
export const InfoFem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const BannerFem = styled.img`
    height: 450px;
    width: 100%;
    margin-bottom: 25px;
`