import React from 'react'
import banF from '../img/feminino-banner.png'
import roupaf1 from '../img/feminina1.png'
import roupaf2 from '../img/feminina2.png'
import roupaf3 from '../img/feminina3.png'
import roupaf4 from '../img/feminina4.png'
import { Produtos, ProdutosM, BannerImg, ContainerProd, PrecoDesc, Linha2 } from '../styled'
import Menu from '../menu/Menu'
import Rodape from '../rodape/Rodape'

export default function ModaFem() {
    return (
        <ContainerProd>
            <Menu link='/loja-roupa'/>
            <div>
                <BannerImg src={banF} alt="Moderno e sofisticado"/>
            </div>
            <h1>Moda feminina <Linha2/></h1>
            <ProdutosM>
                <Produtos>
                    <img src={roupaf1} alt="Blusa cropped branca"/>
                    <PrecoDesc>
                        <p>Blusa cropped com bordados de barquinhos </p>
                        <span>R$ 139,90</span>
                    </PrecoDesc>
                </Produtos>
                <Produtos>
                    <img src={roupaf2} alt="Vestido midi em viscose"/>
                    <PrecoDesc>
                        <p>Vestido midi quadrado e estampa xadrez </p>
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
            <Rodape/>  
        </ContainerProd>
    )
}
