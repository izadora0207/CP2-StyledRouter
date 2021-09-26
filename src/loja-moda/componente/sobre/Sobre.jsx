import React from 'react'
import { Link } from 'react-router-dom'
import ArthurFT from '../img/arthur.jpg'
import DiegoFT from '../img/Diego.jpeg'
import IzaFT from '../img/iza.jpeg'
import NathanFT from '../img/nathan.jpg'

import { A,H2, P, Div, Section, Img } from './styled'

export default function Sobre() {
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
        <Section>
            <Div>
                <Img src={ArthurFT} alt="foto arthur" />
                <A >
                    <H2>Arthur</H2>
                    <P>Back end</P>
                </A>
            </Div>
            <Div>
                <Img src={DiegoFT} alt="foto Diego" />
                <A >
                    <H2>Diego</H2>
                    <P>Back end</P>
                </A>
            </Div>
            <Div>
                <Img src={IzaFT} alt="foto Iza" />
                <A >
                    <H2>Arthur</H2>
                    <P>Front end</P>
                </A>
            </Div>
            <Div>
                <Img src={NathanFT} alt="foto Nathan" />
                <A >
                    <H2>Diego</H2>
                    <P>Front end</P>
                </A>
            </Div>
        </Section>
        </div>   
    )
}
