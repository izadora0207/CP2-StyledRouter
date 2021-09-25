import { Link } from "react-router-dom";
import Menu from './menu/Menu'


export default function IndexL() {
    return (
      <div className="App">
        <Menu/>
        <button><Link to='/'>Voltar</Link></button>
        <h1>Loja aqui</h1>
        
      </div>
    );
  }
  