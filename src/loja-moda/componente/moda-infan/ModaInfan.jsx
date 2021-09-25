import React from 'react'
import { Link } from 'react-router-dom'
import bannerinfantil from '../img/bannerInfantil.jpg'
import roupai1 from '../img/roupa-infantil1.jpg'
import roupai2 from '../img/roupa-infantil2.jpg'
import roupai3 from '../img/roupa-infantil3.jpg'
import roupai4 from '../img/roupa-infantil4.jpg'


export default function ModaInfan() {
    return (
        <div className='container'>
            <div>
                <h1>Moda infantil</h1>
                <img src={bannerinfantil} alt="Banner Verde Semana do Cliente" />
            </div>
        <div className='produtos'>
            <div className="produto-1">
                <img src={roupai1} alt="Camiseta infantil branca Anime" />
                <p>Camiseta Infantil com Estampa Anime</p>
                <span>R$29,90</span>
            </div>
            <div className="produto-2">
                <img src={roupai2} alt="Camisa infantil Jeans" />
                <p>Camisa Infantil Jeans</p>
                <span>R$ 69,90</span>
            </div>
            <div className="produto-3">
                <img src={roupai3} alt="Blusão infantil em moletom gatinha" />
                <p>Blusão infantil em moletom estampa de gatinha e corações</p>
                <span>R$49,90</span>
            </div>
            <div className="produto-4">
                <img src={roupai4} alt="Camiseta infantil laranja Venice" />
                <p>Camiseta Infantil Venice Laranja</p>
                <span>R$ 29,90</span>
            </div>
        </div>
        </div>
    )
}
