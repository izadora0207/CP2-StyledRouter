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

    h1{
        font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
        font-weight: normal;
        margin-bottom:20px;
        padding-top:50px;
        text-transform: uppercase;
        margin-left:20px;
    }
`

export const ProdutosM = styled.div`

    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    grid-gap: 14px;
    max-width: 1280px;
    margin: 85px auto;
    padding-bottom: 140px;


    @media (max-width: 1195px){
        grid-template-columns: repeat(2,minmax(0,1fr));
        margin: 0 auto;
    }

    @media(max-width: 590px){
        grid-template-columns: repeat(1,minmax(0,1fr));
        
    }
`

export const PrecoDesc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;

    p{
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
        font-weight: normal;
    }

    span{
        font-weight: bolder;
    }
`

export const BannerImg = styled.img`
    height: 350px;
    width: 100%;
    margin-bottom: 25px;
    @media(max-width: 590px){
        
            height:auto !important;
    }


`

export const Legenda = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #000000;
`
export const Colecao = styled.p`
    font-family: Verdana, Tahoma, sans-serif;
    font-weight: normal;
    font-size: larger;
    color: #000000;
`
export const Comprar = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
    text-decoration: underline;
    color: #000000;
`
export const Linha2 = styled.div`
   height:4px;
   background:#FF0000;
   width:50px;
   border-radius:50px;
   margin-top:20px;
   margin-left:5px;
`


export const Footer = styled.footer`
    height: 70px;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding:10px;
    p{
        font-size: 13px
    }
`