import styled from "styled-components";


export const Ul = styled.ul`
    display: flex;
    margin-bottom: 5vh;
    justify-content: space-evenly;
    flex-wrap:wrap;
`
export const Li = styled.li`

    list-style: none;
    text-align: center;
    img{
        -webkit-transition: all 0.8s ease;
        transition: all 0.8s ease;
    }
    img:hover{
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
    img:hover {
        .p{color:green}
    }
    p{
        margin-top:25px;
        font-size: 20px;
        font-weight: 700;
        font-family:'Helvetica'
    }
    div{
        width: 315px;
        height: auto;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 1px 20px 60px -50px rgb(0 0 0 / 87%);
        -webkit-transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        background: #cfcac4;
    }

    div:hover{
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        box-shadow: 0px 20px 60px -30px rgb(233 30 99 / 58%);

    }

`

export const Img = styled.img`
    height:auto;
    width:100%;
`

export const H1 = styled.h1`
    margin-bottom:20px;
    text-align:center;
    padding-top:50px;
    color:#fde4b7;
`


export const H2 = styled.h2`
  color: #ff536d;
    padding: 90px 50px;
    font-size: 30px;
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const Div = styled.div`
    height: 313px;
    padding: 50px;
    align-items: flex-start;
    display: flex;
    justify-content: center;
    flex-direction:column;
    h1{
        color: #fde4b7;
        font-size:36px;
    }
    p{
        color:white;
        font-size:20px;
    }

`

export const Button = styled.button`
    margin-bottom: 16px;
    background:#ff536d;
    padding:11px 35px;
    border-radius:20px;
    margin:20px;
    border: 1px solid transparent;
    position:absolute;
    a{
        color: white
    }
`

export const Linha = styled.div`
   height:10px;
   background:#ff536d;
`


export const Linha2 = styled.div`
   height:4px;
   background:#ffc107;
   width:50px;
   border-radius:50px;
   margin-top:20px;


`

export const Footer = styled.footer`
   height:100px;
   background:#ff536d;
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding:5px 30px;
    p{
        color:white;
        
   }
`