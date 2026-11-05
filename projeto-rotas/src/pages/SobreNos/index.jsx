import { Link } from 'react-router-dom'
import './styles.css'

const principles = [
  {
    number: '01',
    title: 'Clareza em primeiro lugar',
    description: 'Traduzimos a contabilidade para uma conversa simples e objetiva.',
  },
  {
    number: '02',
    title: 'Parceria de verdade',
    description: 'O atendimento começa ouvindo o que é importante para a sua empresa.',
  },
  {
    number: '03',
    title: 'Responsabilidade em cada detalhe',
    description: 'Tratamos as informações e as obrigações do negócio com cuidado.',
  },
]

export function SobreNos() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Sobre nós</span>
          <h1>Contabilidade simples. Relações próximas. Decisões mais claras.</h1>
          <p>
            Acreditamos que cuidar dos números também é cuidar dos planos de
            quem empreende. Por isso, nosso trabalho começa com escuta e segue
            com orientação que faz sentido para a realidade da sua empresa.
          </p>
        </div>
      </section>

      <section className="section about-story" aria-labelledby="about-story-title">
        <div className="container about-story__grid">
          <div className="about-story__statement">
            <span className="about-story__mark" aria-hidden="true">“</span>
            <p>Você cuida do seu negócio. A gente ajuda a deixar a contabilidade mais simples.</p>
          </div>
          <div className="about-story__copy">
            <span className="eyebrow">O que nos move</span>
            <h2 id="about-story-title">Mais do que cumprir rotinas, queremos ser apoio para o seu caminho.</h2>
            <p>
              Sabemos que empreender envolve escolhas todos os dias. Nossa
              proposta é organizar a vida contábil da empresa, explicar o que
              realmente importa e estar por perto quando surgirem dúvidas.
            </p>
            <p>
              Com atendimento acessível e uma visão cuidadosa de cada negócio,
              transformamos informações contábeis em uma base mais clara para
              você planejar os próximos passos.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="principles-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Nossos princípios</span>
            <h2 id="principles-title">Um jeito de trabalhar feito para caminhar junto.</h2>
            <p>
              A relação com o escritório precisa ser tão organizada quanto os
              números. É assim que buscamos construir confiança no dia a dia.
            </p>
          </div>
          <div className="card-grid about-principles">
            {principles.map((principle) => (
              <article className="service-card" key={principle.number}>
                <span className="service-card__number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div>
              <span className="eyebrow">Conte com orientação próxima</span>
              <h2>Vamos entender juntos o que a sua empresa precisa?</h2>
              <p>Uma conversa é o primeiro passo para encontrar o apoio certo.</p>
            </div>
            <Link className="button button--light" to="/fale-conosco">
              Fale com a nossa equipe <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
