import React from 'react'
import banM from '../img/masculino-banner.jpg'
import roupa1 from '../img/masculina1.png'
import roupa2 from '../img/masculina2.png'
import roupa3 from '../img/masculina3.png'
import roupa4 from '../img/masculina4.png'

export default function ModaMasc() {
    return (
        <div className="container">
            <body>
                <h1>Moda masculina</h1>
                <figcaption className="banner">
                    <figure>
                        <img src={banM} alt="Moda Geek"/>
                    </figure>
                </figcaption>
                <div className="produto-1">
                    <img src={roupa1} alt="Moda Geek"/>
                    <p>
                        Camisa manga curta em linho com bolso bege
                    </p>
                    <p>
                        R$ 139,90
                    </p>
                </div>
                <div className="produto-2">
                    <img src={roupa2} alt="Moda Geek"/>
                    <p>
                        Calça em linho sem estampa branco
                    </p>
                    <p>
                        R$ 159,90
                    </p>
                </div>
                <div className="produto-3">
                    <img src={roupa3} alt="Moda Geek"/>
                    <p>
                        Camisa manga longa em linho azul
                    </p>
                    <p>
                        R$ 139,90
                    </p>
                </div>
                <div className="produto-4">
                    <img src={roupa4} alt="Moda Geek"/>
                    <p>
                        Camisa manga curta em viscose estampa bandana roxo
                    </p>
                    <p>
                        R$ 119,90
                    </p>
                </div>
            </body>    
        </div>
    )
}
