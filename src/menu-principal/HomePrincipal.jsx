import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import IndexS from '../sorveteria/componente'
import { H1 } from '../styled'


export default function HomePrincipal() {
    return (
        <div>

            <H1>
                <Link to="/sorveteria">Sorvete</Link>
            </H1>

            <h1 className='loja'>
                <Link to="/loja-roupa">Loja</Link>
            </h1>
        </div>
    )
}
