import React from 'react'
import { Link } from 'react-router-dom'
import ArthurFT from '../img/arthur.jpg'
import DiegoFT from '../img/Diego.jpeg'
import IzaFT from '../img/iza.jpeg'
import NathanFT from '../img/nathan.jpg'
import Menu from '../menu/Menu'

import { A,H2, P, Div, Section, Img, Titulo, Linha2 } from './styled'

export default function Sobre() {
    return (
        <div>
            <Menu link='/loja-roupa'/>
            <Titulo>Sobre nós <Linha2/></Titulo>
            <Section>
                <Div>
                    <Img src={ArthurFT} alt="foto arthur" />
                    <A >
                        <H2>Arthur</H2>
                        <P>RM: 86832</P>
                    </A>
                </Div>
                <Div>
                    <Img src={DiegoFT} alt="foto Diego" />
                    <A >
                        <H2>Diego</H2>
                        <P>RM: 87910</P>
                    </A>
                </Div>
                <Div>
                    <Img src={IzaFT} alt="foto Iza" />
                    <A >
                        <H2>Arthur</H2>
                        <P>RM: 88494</P>
                    </A>
                </Div>
                <Div>
                    <Img src={NathanFT} alt="foto Nathan" />
                    <A >
                        <H2>Diego</H2>
                        <P>RM: 88517</P>
                    </A>
                </Div>
            </Section>
        </div>   
    )
}
