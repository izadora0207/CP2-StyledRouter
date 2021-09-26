import { Link } from "react-router-dom";
import Menu from './menu/Menu'
import Home from './home/Home'


export default function IndexL() {
    return (
      <div className="App">
        <Menu/>
        <button><Link to='/'>Voltar</Link></button>
        <Home/>
      </div>
    );
  }
  