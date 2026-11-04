import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-adicionar-usuario',
  imports: [FormsModule],
  templateUrl: './adicionar-usuario.html',
  styleUrl: './adicionar-usuario.css',
})

export class AdicionarUsuario {
  nome = '';
  email = '';
  usuarios: Usuario[] = [];

  adicionarUsuario(): void {
    this.usuarios = [...this.usuarios, { nome: this.nome, email: this.email }];
    this.nome = '';
    this.email = '';
  }

  excluirUsuario(usuarioParaExcluir: Usuario): void {
    this.usuarios = this.usuarios.filter((usuario) => usuario !== usuarioParaExcluir);
  }
}
