import { Link, NavLink } from 'react-router-dom';
import './style.css';

export default function Cabecalho() {
  return (
    <header>
      <Link to='/'>Home</Link>
      <nav>
        <NavLink to='/lista-usuarios'>Usuários</NavLink>
      </nav>
    </header>
  );
}
