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
            </div>
            <div className="produto-2">
            </div>
            <div className="produto-3">
            </div>
            <div className="produto-4">
            </div>
        </div>
        </div>
    )
}
