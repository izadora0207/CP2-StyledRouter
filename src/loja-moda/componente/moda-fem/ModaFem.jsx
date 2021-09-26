import React from 'react'
import { Link } from 'react-router-dom'
import banF from '../img/feminino-banner.jpg'
import roupaf1 from '../img/feminina1.png'
import roupaf2 from '../img/feminina2.png'
import roupaf3 from '../img/feminina3.png'
import roupaf4 from '../img/feminina2.png'
<<<<<<< HEAD
import { Produtos, ProdutosM, BannerImg, ContainerProd, PrecoDesc } from '../styled'
=======
import { Produtos, ProdutosM, BannerImg, ContainerProd, PrecoDesc } from './styled'
import Menu from '../menu/Menu'
>>>>>>> eaaef19cdd0797ab33dd8f40148be3ad7d6484fd

export default function ModaFem() {
    return (
        <ContainerProd>
            <Menu link='/loja-roupa'/>
            <h1>Moda feminina</h1>
            <div>
                <BannerImg src={banF} alt="Listras"/>
            </div>
            <ProdutosM>
                <Produtos>
                    <img src={roupaf1} alt="Blusa cropped branca"/>
                    <PrecoDesc>
                        <p>Blusa cropped em algodão com bordados de barquinhos branco</p>
                        <span>R$ 139,90</span>
                    </PrecoDesc>
                </Produtos>
                <Produtos>
                    <img src={roupaf2} alt="Vestido midi em viscose"/>
                    <PrecoDesc>
                        <p>Vestido midi em viscose com decote quadrado e estampa xadrez prymarycolor12</p>
                        <span>R$ 159,90</span>
                    </PrecoDesc>
                </Produtos>
                <Produtos>
                    <img src={roupaf3} alt="Jaqueta em linho azul"/>
                    <PrecoDesc>
                        <p>Jaqueta em linho com botões de pérola azul</p>
                        <span>R$ 159,90</span>
                    </PrecoDesc>    
                </Produtos>
                <Produtos>
                    <img src={roupaf4} alt="Jaqueta em linho rosa"/>
                    <PrecoDesc>
                        <p>Jaqueta em linho com botões de pérola rosa</p>
                        <span>R$ 159,90</span>
                    </PrecoDesc>
                </Produtos> 
            </ProdutosM>       
        </ContainerProd>
    )
}
