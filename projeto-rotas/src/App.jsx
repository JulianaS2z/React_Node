import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Ecommerce } from './pages/Ecommerce'
import { FaleConosco } from './pages/FaleConosco'
import { Home } from './pages/Home'
import { SobreNos } from './pages/SobreNos'
import { TrabalheConosco } from './pages/TrabalheConosco'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main className="route-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route
            path="*"
            element={
              <section className="container not-found">
                <span className="eyebrow">Página não encontrada</span>
                <h1>Este caminho não está nos nossos planos.</h1>
                <p>Volte para a página inicial e encontre o que procura.</p>
                <Link className="button" to="/">
                  Ir para a página inicial
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
