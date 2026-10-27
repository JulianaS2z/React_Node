import { useState } from 'react';

function AdicionarUsuario() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const funcaoAdicionarUsuario = (e) => {
    e.preventDefault();
    
  
    const novoUsuario = { nome, email };
    setUsuarios([...usuarios, novoUsuario]);
    setNome('');
    setEmail('');
  };

  return (
    <div>
      <h1>Adicionar Usuário</h1>
      <form onSubmit={funcaoAdicionarUsuario}>
        <label htmlFor="nome">Nome:</label>
        <input 
          type="text" 
          id="nome" 
          name="nome" 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required 
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />

        <button type="submit">Adicionar</button>
      </form>

      <hr />

      <h2>Usuários Cadastrados</h2>
      <ul>
        {usuarios.map((user, index) => (
          <li key={index}>
            <strong>{user.nome}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default AdicionarUsuario;
