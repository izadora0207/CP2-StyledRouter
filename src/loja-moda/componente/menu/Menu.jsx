import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/moda-masculina'> Homem</Link></li>
                        <li><Link to='/moda-feminina'> Mulher </Link></li>
                        <li><Link to='/moda-infantil'>  Infantil  </Link></li>
                        <li><Link to='/sobre'> Sobre  </Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
