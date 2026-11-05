import { Link } from 'react-router-dom'
import './styles.css'

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container site-footer__main">
                <div>
                    <Link className="site-footer__brand" to="/">Contabilidade Simples</Link>
                    <p>Mais clareza para cuidar da sua empresa e decidir os próximos passos.</p>
                </div>
                <nav className="site-footer__nav" aria-label="Links do rodapé">
                    <Link to="/">Início</Link>
                    <Link to="/sobre-nos">Sobre nós</Link>
                    <Link to="/ecommerce">E-commerce</Link>
                    <Link to="/trabalhe-conosco">Trabalhe conosco</Link>
                    <Link to="/fale-conosco">Fale conosco</Link>
                </nav>
            </div>
            <div className="container site-footer__bottom">
                <span>&copy; {new Date().getFullYear()} Contabilidade Simples</span>
                <span>Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}