import React from 'react'
import banM from '../img/masculino-banner.jpg'
import roupa1 from '../img/masculina1.png'
import roupa2 from '../img/masculina2.png'
import roupa3 from '../img/masculina3.png'
import roupa4 from '../img/masculina4.png'
import { Produtos, ProdutosM, BannerImg, ContainerProd, PrecoDesc } from '../styled'
import Menu from '../menu/Menu'


export default function ModaMasc() {
    return (
        <ContainerProd>
            <Menu link='/loja-roupa'/>
            <h1>Moda masculina</h1>
            <div>
                <BannerImg src={banM} alt="Moda Geek"/>
            </div>
            <ProdutosM>
                <Produtos>
                    <img src={roupa1} alt="Camisa manga curta em linho bege"/>
                    <PrecoDesc>
                        <p>Camisa manga curta em linho com bolso bege</p>
                        <span>R$ 139,90</span>
                    </PrecoDesc>       
                </Produtos>
                <Produtos>
                    <img src={roupa2} alt="Calça em linho branca"/>
                    <PrecoDesc>
                        <p>Calça em linho sem estampa branco</p>
                        <span>R$ 159,90</span>
                    </PrecoDesc>
                </Produtos>
                <Produtos>
                    <img src={roupa3} alt="Camisa manga longa em linho azul"/>
                    <PrecoDesc>
                        <p>Camisa manga longa em linho azul</p>
                        <span>R$ 139,90</span>
                    </PrecoDesc>
                </Produtos>
                <Produtos>
                    <img src={roupa4} alt="Camisa manga curta em viscose"/>
                    <PrecoDesc>
                        <p>Camisa manga curta em viscose estampa bandana roxo</p>
                        <span>R$ 119,90</span>
                    </PrecoDesc>
                </Produtos> 
            </ProdutosM>         
        </ContainerProd>
    )
}
