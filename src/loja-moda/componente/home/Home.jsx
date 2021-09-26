import React from 'react'
import {BannerImg, ProdutosM, Produtos, ContainerProd} from '../styled'
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
            <h1>confira nossas coleções</h1>
            <ProdutosM>
                <Produtos>
                    <img src={roupah1} alt="Blusa cropped branca"/>
                        <p>Aposte nos tons pastel</p>
                        <p>Para Mais cor e leveza no dia a dia</p>
                        <span>Comprar</span>
                </Produtos>
                <Produtos>
                    <img src={roupah2} alt="Blusa cropped branca"/>
                        <p>Alto astral</p>
                        <p>Looks com uma dose extra de bom humor</p>
                        <span>Comprar</span>
                </Produtos>
                <Produtos>
                    <img src={roupah3} alt="Blusa cropped branca"/>
                        <p>Renovação urbana</p>
                        <p>Amplo, comfortavel e cheio de atitude</p>
                        <span>Comprar</span>
                </Produtos>
            </ProdutosM>
        </ContainerProd>
    )
}
