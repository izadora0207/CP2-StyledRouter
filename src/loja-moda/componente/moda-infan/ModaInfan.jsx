import React from 'react'
import { Produtos, ProdutosM, BannerImg, ContainerProd, PrecoDesc } from '../styled'
import bannerinfantil from '../img/bannerinfantil.jpg'
import roupai1 from '../img/roupa-infantil1.jpg'
import roupai2 from '../img/roupa-infantil2.jpg'
import roupai3 from '../img/roupa-infantil3.jpg'
import roupai4 from '../img/roupa-infantil4.jpg'
import Menu from '../menu/Menu'


export default function ModaInfan() {
    return (
        <ContainerProd>
           <Menu link='/loja-roupa'/>
            <div>
                <BannerImg src={bannerinfantil} alt="Banner Verde Semana do Cliente" />
            </div>
            <ProdutosM>
                <Produtos>
                    <img src={roupai1} alt="Camiseta infantil branca Anime" />
                    <PrecoDesc>
                        <p>Camiseta Infantil com Estampa Anime</p>
                        <span>R$29,90</span>
                    </PrecoDesc>
                </Produtos>
                <Produtos>
                    <img src={roupai2} alt="Camisa infantil Jeans" />
                    <PrecoDesc>
                        <p>Camiseta Infantil Dragon Ball - Cinza</p>
                        <span>R$ 39,90</span>
                    </PrecoDesc>
                </Produtos>
                <Produtos>
                    <img src={roupai3} alt="Blusão infantil em moletom gatinha" />
                    <PrecoDesc>
                        <p>Camiseta Infantil Dragon Ball - Preto</p>
                        <span>R$39,90</span>
                    </PrecoDesc>
                </Produtos>
                <Produtos>
                    <img src={roupai4} alt="Camiseta infantil laranja Venice" />
                    <PrecoDesc>
                        <p>Camiseta Infantil Naruto</p>
                        <span>R$ 39,90</span>
                    </PrecoDesc>
                </Produtos>
            </ProdutosM>
        </ContainerProd>
    )
}
