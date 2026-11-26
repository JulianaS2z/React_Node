import { Routes } from '@angular/router';
import { AdicionarUsuario } from './pages/home/home-usuario';

export const routes: Routes = [
  { path: '', component: AdicionarUsuario, pathMatch: 'full' },
];
