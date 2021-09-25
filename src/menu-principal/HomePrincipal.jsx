import { Link } from 'react-router-dom'
import { H1 } from '../styled'
import { DivHome, Img } from './styled'
import image from '../img/quem-somos.png'
import image2 from '../img/camiseta.png'


export default function HomePrincipal() {
    return (
        <DivHome>
            <div className="box1">
                <H1><Link to="/sorveteria">Sorvete</Link></H1>
                <Link to="/sorveteria">  <Img src={image} alt="" /></Link>
              
            </div>

           
            <div className="box2">
                <H1><Link to="/loja-roupa">Loja</Link></H1>
                <Link to="/loja-roupa">  <Img src={image2} alt="" /></Link>
            </div>
        </DivHome>
    )
}
