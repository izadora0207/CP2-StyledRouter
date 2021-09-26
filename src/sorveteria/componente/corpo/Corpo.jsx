import React from 'react'
import Ft1 from '../img/KINDER.jpg'
import Ft2 from '../img/Brisbane.jpg'
import Ft3 from '../img/Kit Kat.jpg'
import Ft4 from '../img/Melbourne.jpg'
import Ct1 from '../img/Cappuccino.jpg'
import Ct2 from '../img/Chocolate Quente.jpg'
import Ct3 from '../img/Expresso.jpg'
import Ct4 from '../img/ExpressoChantilly.jpg'
import { Li, Ul, Img, H2,Linha2, H1} from '../../styled'

export default function Corpo() {
    return (
        <div className="back">
            <H2>Taças  <Linha2/></H2>
           
            <Ul>
                <Li>
                <div><Img src={Ft1} alt="" /></div>
                    <p>Kinder</p>
                    <p>R$59,99</p>
                </Li>
                <Li>
                    <div><Img src={Ft3} alt="" /></div>
                    <p className="p">Kit Kat</p>
                    <p>R$59,99</p>
                </Li>
                <Li>
                <div><Img src={Ft4} alt="" /></div>
                    <p>Melbourne</p>
                    <p>R$59,99</p>
                </Li>
                <Li>
                <div><Img src={Ft2} alt="" /></div>
                    <p>Brisbane </p>
                    <p>R$59,99</p>
                </Li>
            </Ul>

            <H2> Acompanhamentos <Linha2/></H2>

            <Ul>
                <Li>
                <div><Img src={Ct1} alt="" /></div>
                    <p>Cappuccino</p>
                    <p>R$14,99</p>
                </Li>
                <Li>
                <div><Img src={Ct2} alt="" /></div>
                    <p>Chocolate Quente </p>
                    <p>R$14,99</p>

                </Li>
                <Li>
                <div><Img src={Ct3} alt="" /></div>
                    <p>Expresso</p>
                    <p>R$14,99</p>
                </Li>
                <Li>
                <div><Img src={Ct4} alt="" /></div>
                    <p>ExpressoChantilly</p>
                    <p>R$14,99</p>
                </Li>
            </Ul>

        </div>
    )
}
