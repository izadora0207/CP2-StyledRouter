import Cabecalho from "./cabecalho/Cabecalho";
import Corpo from "./corpo/Corpo"
import Rodape from "./rodape/Rodape";

export default function IndexS() {
  return (
    <div className="App">
      <Cabecalho />
      <Corpo />
      <Rodape />
    </div>
  );
}
