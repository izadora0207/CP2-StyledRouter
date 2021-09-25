import styled from "styled-components";

export const Produtos = styled.div`
    height: 350px;
    border-radius: 7px;
    margin-right: 25px;
    margin-bottom: 45px;
    
    img
    {
        height: 100%;
        border-radius: 3px;
    }
`;

export const ContainerProd = styled.body`
    background-color: #fff;
    color: #000;
`

export const ProdutosM = styled.div`
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

    /* max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    text-transform: uppercase; */
`
export const PrecoDesc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const BannerImg = styled.img`
    height: 450px;
    width: 100%;
    margin-bottom: 25px;
`