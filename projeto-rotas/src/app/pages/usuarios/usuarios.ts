import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  id?: number;
  nome: string;
  email: string;
  telefone?: string;
}

@Component({
  selector: 'app-usuarios',
  imports: [FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  usuarios: Usuario[] = [];
  nome = '';
  email = '';
  telefone = '';

  adicionarUsuario(): void {
    const nome = this.nome.trim();
    const email = this.email.trim();
    const telefone = this.telefone.trim();

    if (!nome || !email) {
      return;
    }

    const novoUsuario: Usuario = {
      id: this.usuarios.length + 1,
      nome,
      email,
      telefone: telefone || undefined,
    };

    this.usuarios = [...this.usuarios, novoUsuario];
    this.nome = '';
    this.email = '';
    this.telefone = '';
  }
}
