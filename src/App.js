import IndexL from "./loja-moda/componente";
import HomePrincipal from "./menu-principal/HomePrincipal";
import IndexS from "./sorveteria/componente";
import { Route, Switch } from 'react-router'
import ModaMasc from './loja-moda/componente/moda-masc/ModaMasc'
import ModaFem from "./loja-moda/componente/moda-fem/ModaFem";
import ModaInfan from "./loja-moda/componente/moda-infan/ModaInfan";
import Sobre from "./loja-moda/componente/sobre/Sobre";
import { Div,Body } from './styled'
import './app.css' //so para nao ficar aquelas 'margins' horriveis de fundo

export default function App() {
  return (
      <Div>
        <Switch>
          <Route path="/" exact component={HomePrincipal} />
          <Route path='/sorveteria' component={IndexS} />
          <Route path='/loja-roupa' component={IndexL} />
          <Route path='/moda-masculina' component={ModaMasc} />
          <Route path='/moda-feminina' component={ModaFem} />
          <Route path='/moda-infantil' component={ModaInfan} />
          <Route path='/sobre' component={Sobre} />
        </Switch>
      </Div>
  );
}

