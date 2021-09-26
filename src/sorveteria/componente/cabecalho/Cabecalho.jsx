import React from 'react'
import { Link } from 'react-router-dom'
import { Button,H1,Div ,Linha} from '../../styled'

export default function Cabecalho() {
    return (
        <div>
            <Linha/>
              <Button><Link to='/'>  Voltar </Link></Button>
           <Div className='banner'>
                <H1>Olá seja bem vindo!</H1>
                <p> Sorveteria Tage o melhor sorvete da sua vida.</p>
            </Div> 
        </div>
    )
}
