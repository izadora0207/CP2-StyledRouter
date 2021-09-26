import React from 'react'
import { Link } from 'react-router-dom'
import banF from '../img/feminino-banner.jpg'
import roupaf1 from '../img/feminina1.png'
import roupaf2 from '../img/feminina2.png'
import roupaf3 from '../img/feminina3.png'
import roupaf4 from '../img/feminina2.png'
import { Container, BannerFem, ProdutosAll, ProdutosFem, InfoFem} from './styledFem'

export default function ModaFem() {
    return (
        <Container>
            <h1>Moda feminina</h1>
            <div>
                <BannerFem img src={banF} alt="Listras"/>
            </div>
            <ProdutosAll>
                <ProdutosFem>
                    <img src={roupaf1} alt="Blusa cropped branca"/>
                    <InfoFem>
                        <p>Blusa cropped em algodão com bordados de barquinhos branco</p>
                        <span>R$ 139,90</span>
                    </InfoFem>
                </ProdutosFem>
                <ProdutosFem>
                    <img src={roupaf2} alt="Vestido midi em viscose"/>
                    <InfoFem>
                        <p>Vestido midi em viscose com decote quadrado e estampa xadrez prymarycolor12</p>
                        <span>R$ 159,90</span>
                    </InfoFem>
                </ProdutosFem>
                <ProdutosFem>
                    <img src={roupaf3} alt="Jaqueta em linho azul"/>
                    <InfoFem>
                        <p>Jaqueta em linho com botões de pérola azul</p>
                        <span>R$ 159,90</span>
                    </InfoFem>    
                </ProdutosFem>
                <ProdutosFem>
                    <img src={roupaf4} alt="Jaqueta em linho rosa"/>
                    <InfoFem>
                        <p>Jaqueta em linho com botões de pérola rosa</p>
                        <span>R$ 159,90</span>
                    </InfoFem>
                </ProdutosFem> 
            </ProdutosAll>       
        </Container>
    )
}
