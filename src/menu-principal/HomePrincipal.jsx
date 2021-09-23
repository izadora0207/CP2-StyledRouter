import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import IndexS from '../sorveteria/componente'

export default function HomePrincipal() {
    return (
        <div>
            <h1 className='sorv'>
                <Link to="/sorveteria">Sorvete</Link>
            </h1>

            <h1 className='loja'>
                <Link to="/loja-roupa">Loja</Link>
            </h1>
        </div>
    )
}
