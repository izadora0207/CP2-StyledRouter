import { Link } from "react-router-dom";
import Cabecalho from "./cabecalho/Cabecalho";
import Corpo from "./corpo/Corpo"
import Rodape from "./rodape/Rodape";

export default function IndexS() {
  return (
    <div className="App">
      <button><Link to='/'>  voltar </Link></button>
      <Cabecalho />
      <Corpo />
      <Rodape />
    </div>
  );
}
