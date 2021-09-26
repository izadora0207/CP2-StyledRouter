import styled from "styled-components";

export const Produtos = styled.div`
    height: 350px;
    border-radius: 7px;
    margin: 20px auto;
    
    img
    {
        height: 100%;
        border-radius: 3px;
    }

    @media(max-width: 590px){
        margin: 20px auto; 
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

    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    text-transform: uppercase; */
`
export const PrecoDesc = styled.div`]
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    /* background-color: #ff2; */
    margin: 0 auto;
`

export const BannerImg = styled.img`
    height: 350px;
    width: 100%;
    margin-bottom: 25px;
`