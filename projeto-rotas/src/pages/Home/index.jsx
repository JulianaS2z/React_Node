import { Link } from 'react-router-dom'
import './styles.css'

const services = [
  {
    number: '01',
    title: 'Rotinas contábeis e fiscais',
    description: 'Organização das informações e acompanhamento das obrigações do dia a dia.',
  },
  {
    number: '02',
    title: 'Departamento pessoal',
    description: 'Apoio para cuidar das rotinas trabalhistas com clareza e atenção.',
  },
  {
    number: '03',
    title: 'Abertura e regularização',
    description: 'Orientação para formalizar ou colocar a empresa em dia.',
  },
  {
    number: '04',
    title: 'Apoio ao empreendedor',
    description: 'Informações contábeis explicadas para ajudar você a decidir os próximos passos.',
  },
]

const steps = [
  {
    number: '01',
    title: 'A gente entende',
    description: 'Conhecemos a realidade, o momento e os objetivos da sua empresa.',
  },
  {
    number: '02',
    title: 'A gente organiza',
    description: 'Alinhamos as rotinas contábeis à necessidade do seu negócio.',
  },
  {
    number: '03',
    title: 'A gente acompanha',
    description: 'Você conta com informação clara para seguir em frente com mais segurança.',
  },
]

export function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <span className="eyebrow">Contabilidade para quem empreende</span>
            <h1>Mais clareza nos números. Mais confiança para decidir.</h1>
            <p>
              Cuidamos das rotinas contábeis da sua empresa com proximidade,
              organização e uma conversa que você entende.
            </p>
            <div className="home-hero__actions">
              <Link className="button" to="/fale-conosco">
                Converse com a nossa equipe <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-link" to="/sobre-nos">
                Conheça o escritório
              </Link>
            </div>
            <div className="home-hero__note">
              <span className="home-hero__note-mark" aria-hidden="true">✓</span>
              <span>Atendimento próximo, informação sem complicação.</span>
            </div>
          </div>

          <div className="home-hero__art" aria-label="Contabilidade simples, feita para acompanhar o seu negócio">
            <div className="hero-card">
              <div className="hero-card__top">
                <span className="hero-card__symbol" aria-hidden="true">C</span>
                <span>CONTABILIDADE &amp; GESTÃO</span>
              </div>
              <div className="hero-card__line" />
              <p className="hero-card__label">O seu negócio merece</p>
              <p className="hero-card__message">uma contabilidade que acompanha o seu ritmo.</p>
              <div className="hero-card__footer">
                <span>Clareza</span>
                <span>Parceria</span>
                <span>Confiança</span>
              </div>
            </div>
            <span className="hero-orbit hero-orbit--one" aria-hidden="true" />
            <span className="hero-orbit hero-orbit--two" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section home-services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Como podemos ajudar</span>
            <h2 id="services-title">A contabilidade acompanha cada etapa da sua empresa.</h2>
            <p>
              Do começo às decisões do dia a dia, você tem apoio para cuidar da
              parte contábil e manter o foco no que faz o negócio avançar.
            </p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-card__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft home-approach" aria-labelledby="approach-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Nosso jeito de trabalhar</span>
            <h2 id="approach-title">Menos dúvidas. Mais direção para o seu negócio.</h2>
            <p>
              A boa contabilidade não fica só nos documentos: ela traduz
              informações e ajuda você a enxergar o próximo passo.
            </p>
          </div>
          <div className="home-steps">
            {steps.map((step) => (
              <article className="home-step" key={step.number}>
                <span className="home-step__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <Link className="text-link home-approach__link" to="/sobre-nos">
            Saiba mais sobre o nosso trabalho <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-panel">
            <div>
              <span className="eyebrow">Vamos conversar?</span>
              <h2>O próximo passo do seu negócio pode começar com uma boa conversa.</h2>
              <p>Conte o que você precisa e vamos entender como podemos ajudar.</p>
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
