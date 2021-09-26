import styled from "styled-components";

export const ProdutosMasc = styled.div`
    height: 350px;
    border-radius: 7px;
    margin: 20px auto;

    img{
        height: 100%;
        border-radius: 3px;
    }

    @media(max-width: 590px){
        margin: 20px auto; 
    }
`;

export const Container = styled.body`
    background-color: #fff;
    color: #000;
`

export const ProdutosAll = styled.div`
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    grid-gap: 14px;
    max-width: 1280px;
    margin: 0 auto;

    @media (min-width: 989px){
        grid-template-columns: repeat(4,minmax(0,1fr));
        margin: 0 auto;
    }

    @media (max-width: 988px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`
export const InfoMasc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 0 auto;
`
export const BannerMasc = styled.img`
    height: 350px;
    width: 100%;
    margin-bottom: 25px;
`