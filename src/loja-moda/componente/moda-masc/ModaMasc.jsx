import React from 'react'
import { Link } from 'react-router-dom'
import banM from '../img/masculino-banner.jpg'
import roupa1 from '../img/masculina1.png'
import roupa2 from '../img/masculina2.png'
import roupa3 from '../img/masculina3.png'
import roupa4 from '../img/masculina4.png'
import { Container, ProdutosAll, ProdutosMasc, InfoMasc, BannerMasc} from './styledMasc'

export default function ModaMasc() {
    return (
        <Container>
            <h1>Moda masculina</h1>
            <div>
                <BannerMasc img src={banM} alt="Moda Geek"/>
            </div>
            <ProdutosAll>
                <ProdutosMasc>
                    <img src={roupa1} alt="Camisa manga curta em linho bege"/>
                    <InfoMasc>
                        <p>Camisa manga curta em linho com bolso bege</p>
                        <span>R$ 139,90</span>
                    </InfoMasc>       
                </ProdutosMasc>
                <ProdutosMasc>
                    <img src={roupa2} alt="Calça em linho branca"/>
                    <InfoMasc>
                        <p>Calça em linho sem estampa branco</p>
                        <span>R$ 159,90</span>
                    </InfoMasc>
                </ProdutosMasc>
                <ProdutosMasc>
                    <img src={roupa3} alt="Camisa manga longa em linho azul"/>
                    <InfoMasc>
                        <p>Camisa manga longa em linho azul</p>
                        <span>R$ 139,90</span>
                    </InfoMasc>
                </ProdutosMasc>
                <ProdutosMasc>
                    <img src={roupa4} alt="Camisa manga curta em viscose"/>
                    <InfoMasc>
                        <p>Camisa manga curta em viscose estampa bandana roxo</p>
                        <span>R$ 119,90</span>
                    </InfoMasc>
                </ProdutosMasc> 
            </ProdutosAll>          
        </Container>
    )
}
