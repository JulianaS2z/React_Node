import { Routes } from '@angular/router';
import { AdicionarUsuario } from './pages/adicionar-usuario/adicionar-usuario';

export const routes: Routes = [
  { path: '', component: AdicionarUsuario, pathMatch: 'full' },
];
