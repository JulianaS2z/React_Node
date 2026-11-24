import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await api.get('/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsuarios();
  }, []);

  return (
    <div className="usuarios-container">
      <h1>Lista de Usuários</h1>

      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              <strong>{usuario.nome}</strong> - {usuario.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
