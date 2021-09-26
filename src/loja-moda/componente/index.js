
import Menu from './menu/Menu'
import Home from './home/Home'
import './menu/style.css'

export default function IndexL() {
    return (
      <div className="App">
        <Menu link='/'/>
        <Home/>
      </div>
    );
  }
  