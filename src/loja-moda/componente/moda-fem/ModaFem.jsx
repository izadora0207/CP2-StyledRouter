import React from 'react'
import banF from '../img/feminino-banner.jpg'
import roupaf1 from '../img/feminina1.png'
import roupaf2 from '../img/feminina2.png'
import roupaf3 from '../img/feminina3.png'
import roupaf4 from '../img/feminina2.png'

export default function ModaFem() {
    return (
        <div className="container">
                <h1>Moda feminina</h1>
                <figcaption className="banner">
                    <figure>
                        <img src={banF} alt="Listras"/>
                    </figure>
                </figcaption>
                <div className="produto-1">
                    <img src={roupaf1} alt="Blusa cropped branca"/>
                    <p>
                        Blusa cropped em algodão com bordados de barquinhos branco
                    </p>
                    <p>
                        R$ 139,90
                    </p>
                </div>
                <div className="produto-2">
                    <img src={roupaf2} alt="Vestido midi em viscose"/>
                    <p>
                        Vestido midi em viscose com decote quadrado e estampa xadrez prymarycolor12
                    </p>
                    <p>
                        R$ 159,90
                    </p>
                </div>
                <div className="produto-3">
                    <img src={roupaf3} alt="Jaqueta em linho azul"/>
                    <p>
                        Jaqueta em linho com botões de pérola azul
                    </p>
                    <p>
                        R$ 159,90
                    </p>
                </div>
                <div className="produto-4">
                    <img src={roupaf4} alt="Jaqueta em linho rosa"/>
                    <p>
                    Jaqueta em linho com botões de pérola rosa
                    </p>
                    <p>
                        R$ 159,90
                    </p>
                </div>  
        </div>
    )
}
