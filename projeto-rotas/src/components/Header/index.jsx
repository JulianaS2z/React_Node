import './styles.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

export function Header() {
    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <Link className="brand" to="/" aria-label="Contabilidade Simples — página inicial">
                    <img className="brand__logo" src={logo} alt="" />
                    <span className="brand__name">
                        <strong>Contabilidade</strong>
                        <span>simples para crescer</span>
                    </span>
                </Link>

                <nav className="site-nav" aria-label="Navegação principal">
                    <NavLink className={({ isActive }) => isActive ? 'site-nav__link is-active' : 'site-nav__link'} to="/" end>Início</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'site-nav__link is-active' : 'site-nav__link'} to="/sobre-nos">Sobre nós</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'site-nav__link is-active' : 'site-nav__link'} to="/fale-conosco">Fale conosco</NavLink>
                </nav>

                <Link className="button site-header__cta" to="/fale-conosco">Vamos conversar <span aria-hidden="true">→</span></Link>
            </div>
        </header>
    )
}