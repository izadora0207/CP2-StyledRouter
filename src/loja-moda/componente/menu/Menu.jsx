import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/moda-masculina'>Moda Masculina</Link></li>
                        <li><Link to='/moda-feminina'>Moda Feminina</Link></li>
                        <li><Link to='/moda-infantil'>Moda Infantil</Link></li>
                        <li><Link to='/sobre'>Sobre Nós</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
