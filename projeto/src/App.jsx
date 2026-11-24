import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import HomePage from './pages/HomePage';
import UsuariosPages from './pages/UsuariosPages';

export default function App() {
  return (
    <BrowserRouter>
      <Cabecalho />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lista-usuarios" element={<UsuariosPages />} />
        </Routes>
      </main>

      <Rodape />
    </BrowserRouter>
  );
}
