import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Ul ,Li,Button} from './styled'

export default function Menu(props) {
    return (
            <Header>
                <nav>
                    <input type="checkbox" id="check1"/>
                    <label for="check1" class="check1">&#9776;</label>
                    <Button><Link to={props.link}>Voltar</Link></Button>
                    <Ul className='menu'>
                        <Li><Link to='/moda-masculina'>Moda Masculina</Link></Li>
                        <Li><Link to='/moda-feminina'>Moda Feminina</Link></Li>
                        <Li><Link to='/moda-infantil'>Moda Infantil</Link></Li>
                        <Li><Link to='/sobre'>Sobre Nós</Link></Li>
                    </Ul>
                </nav>
            </Header>
    )
}
