import React from 'react'
import { Link } from 'react-router-dom'
import {BannerImg, ProdutosM, Produtos, ContainerProd, Legenda, Colecao, Comprar, Linha2} from '../styled'
import banH from '../img/BannerHome.jpg'
import roupah1 from '../img/masculina1-hover.png'
import roupah2 from '../img/feminina1-hover.png'
import roupah3 from '../img/roupa-infantil1hover.jpg'


export default function Home() {
    return (
        <ContainerProd>
            <div>
                <BannerImg src={banH} alt="Moda Verão"/>
            </div>
            <h1>confira nossas coleções <Linha2/></h1>
            <ProdutosM>
                <Produtos>
                    <Link to='/moda-masculina'>
                        <img src={roupah1} alt="Blusa cropped branca"/>
                        <Colecao>Aposte nos tons pastel</Colecao>
                        <Legenda>Para Mais cor e leveza no dia a dia</Legenda>
                        <Comprar>Comprar</Comprar>
                    </Link>
                </Produtos>
                <Produtos>
                    <Link to='/moda-feminina'>
                        <img src={roupah2} alt="Blusa cropped branca"/>
                        <Colecao>Alto astral</Colecao>
                        <Legenda>Looks com uma dose extra de bom humor</Legenda>
                        <Comprar>Comprar</Comprar>
                    </Link>
                </Produtos>
                <Produtos>
                    <Link to='/moda-infantil'>
                        <img src={roupah3} alt="Blusa cropped branca"/>
                        <Colecao>Renovação urbana</Colecao>
                        <Legenda>Amplo, comfortavel e cheio de atitude</Legenda>
                        <Comprar>Comprar</Comprar>
                    </Link>
                </Produtos>
            </ProdutosM>
        </ContainerProd>
    )
}
