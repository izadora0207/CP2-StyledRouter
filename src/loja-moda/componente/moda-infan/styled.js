import styled from "styled-components";

export const Produtos = styled.div`
    height: 350px;
    border-radius: 7px;
    margin: 20px auto;
    
    img
    {
        height: 100%;
        border-radius: 3px;
        -webkit-transition: all 0.8s ease;
        transition: all 0.8s ease;
        margin-bottom: 25px;
    }

    img:hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    @media(max-width: 590px){
        margin: 30px auto; 
    }

    @media(max-width: 1195px){
        margin: 35px auto;
    }
`;

export const ContainerProd = styled.body`
    background-color: #fff;
    color: #000;
`

export const ProdutosM = styled.div`

    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    grid-gap: 14px;
    max-width: 1280px;
    margin: 0 auto;

    @media (max-width: 1195px){
        grid-template-columns: repeat(2,minmax(0,1fr));
        margin: 0 auto;
    }

    @media(max-width: 590px){
        grid-template-columns: repeat(1,minmax(0,1fr));
    }
`

export const PrecoDesc = styled.div`]
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 0 auto;
`

export const BannerImg = styled.img`
    height: 350px;
    width: 100%;
    margin-bottom: 25px;
`