import React from 'react'
import Ft1 from '../../../img/KINDER.jpg'
import Ft2 from '../../../img/Brisbane.jpg'
import Ft3 from '../../../img/Kit Kat.jpg'
import Ft4 from '../../../img/Melbourne.jpg'
import Ft5 from '../../../img/CascãoTrufado.jpg'

import Ct1 from '../../../img/Cappuccino.jpg'
import Ct2 from '../../../img/Chocolate Quente.jpg'
import Ct3 from '../../../img/Expresso.jpg'
import Ct4 from '../../../img/ExpressoChantilly.jpg'
import { Li, Ul, Img } from '../../../styled'

export default function Corpo() {
    return (
        <div>
            <h2>
                Taças
            </h2>
            <Ul>
                <Li>
                    <Img src={Ft1} alt="" />
                    <p>Kinder - 59,99</p>
                </Li>
                <Li>
                    <Img src={Ft2} alt="" />
                    <p>Brisbane - 59,99</p>
                </Li>
                <Li>
                    <Img src={Ft3} alt="" />
                    <p>Kit Kat - 59,99</p>
                </Li>
                <Li>
                    <Img src={Ft4} alt="" />
                    <p>Melbourne - 59,99</p>
                </Li>
                <Li>
                    <Img src={Ft5} alt="" />
                    <p>CascãoTrufado - 24,99</p>
                </Li>
            </Ul>

            <h2>
                Acompanhamento
            </h2>

            <Ul>
                <Li>
                    <Img src={Ct1} alt="" />
                    <p>Cappuccino - 14,99</p>
                </Li>
                <Li>
                    <Img src={Ct2} alt="" />
                    <p>Chocolate Quente - 14,99</p>
                </Li>
                <Li>
                    <Img src={Ct3} alt="" />
                    <p>Expresso - 14,99</p>
                </Li>
                <Li>
                    <Img src={Ct4} alt="" />
                    <p>ExpressoChantilly - 14,99</p>
                </Li>
            </Ul>

        </div>
    )
}
