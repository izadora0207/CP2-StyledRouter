import styled from "styled-components";

export const Ul= styled.ul`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
`;


export const Li= styled.li`
    list-style:none;
    padding:10px 0px;
    a{
        color: black;
    }   
    a:hover{
        color:red;
    }
`;


export const Header= styled.header`
    padding:20px 10%;
    box-shadow:-1px 4px 9px 1px #80808026;
    border-top:5px solid red;
    .check-l{
    display: inline;
    }

    .check1{
        font-size: 30px;
        color: black;
        cursor: pointer;
        display: none;
        line-height: 20px;
        margin-top:16px
        
    }
    #check1{
    display: none;
}


@media (max-width: 758px) {
    .check1{
        display: block;
    }
}
`;

export const Button= styled.button`
    margin-bottom: 16px;
    background:red;
    padding:11px 35px;
    border-radius:20px;
    left:10px;
    top:20px;
    border: 1px solid transparent;
    position:absolute;
    a{
        color: white
    }
`;

