import './styles.css'

export function Ecommerce() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const nome = formData.get('nome')
    const assunto = formData.get('assunto')
    const mensagem = `Olá! Meu nome é ${nome}. Gostaria de conversar sobre ${assunto}.`

    window.location.href = `https://wa.me/?text=${encodeURIComponent(mensagem)}`
  }

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Fale conosco</span>
          <h1>Vamos conversar sobre o futuro da sua empresa?</h1>
          <p>
            Conte um pouco do que você precisa. Estamos prontos para ouvir e
            entender como a contabilidade pode apoiar o seu negócio.
          </p>
        </div>
      </section>

      <section className="section contact-section ecommerce-contact-section">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">Estamos por perto</span>
            <h2>Uma boa parceria começa com uma conversa simples.</h2>
            <p>
              Seja para abrir uma empresa, organizar as rotinas ou tirar uma
              dúvida contábil, fale com a nossa equipe.
            </p>
            <div className="contact-highlight">
              <span className="contact-highlight__icon" aria-hidden="true">↗</span>
              <p>
                Ao continuar, o WhatsApp será aberto com uma mensagem pronta.
                Selecione o contato do escritório para enviá-la.
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Como podemos ajudar?</h2>
            <p>Preencha os campos e prepare uma mensagem para a nossa equipe.</p>

            <label htmlFor="contact-name">Seu nome</label>
            <input
              autoComplete="name"
              id="contact-name"
              name="nome"
              placeholder="Como podemos chamar você?"
              required
            />

            <label htmlFor="contact-subject">O que você precisa?</label>
            <select id="contact-subject" name="assunto" defaultValue="" required>
              <option disabled value="">Selecione um assunto</option>
              <option value="abrir ou regularizar minha empresa">Abrir ou regularizar uma empresa</option>
              <option value="contabilidade da minha empresa">Contabilidade para minha empresa</option>
              <option value="departamento pessoal">Departamento pessoal</option>
              <option value="uma dúvida contábil">Tirar uma dúvida</option>
              <option value="outro assunto">Outro assunto</option>
            </select>

            <button className="button contact-form__submit" type="submit">
              Continuar pelo WhatsApp <span aria-hidden="true">→</span>
            </button>
            <span className="contact-form__note">
              Este site não armazena as informações digitadas.
            </span>
          </form>
        </div>
      </section>
    </>
  )
}
