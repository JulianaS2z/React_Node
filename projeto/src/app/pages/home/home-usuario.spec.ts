import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarUsuario } from './home-usuario';

describe('AdicionarUsuario', () => {
  let component: AdicionarUsuario;
  let fixture: ComponentFixture<AdicionarUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarUsuario);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a user and clear the form fields', () => {
    component.nome = 'Ana';
    component.email = 'ana@example.com';

    component.adicionarUsuario();

    expect(component.usuarios).toEqual([{ nome: 'Ana', email: 'ana@example.com' }]);
    expect(component.nome).toBe('');
    expect(component.email).toBe('');
  });

  it('should remove only the selected user', () => {
    const firstUser = { nome: 'Ana', email: 'ana@example.com' };
    const secondUser = { nome: 'Ana Silva', email: 'ana@example.com' };
    component.usuarios = [firstUser, secondUser];

    component.excluirUsuario(firstUser);

    expect(component.usuarios).toEqual([secondUser]);
  });

  it('should render and remove users from the list', async () => {
    component.usuarios = [{ nome: 'Ana', email: 'ana@example.com' }];
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('ana@example.com');
    fixture.nativeElement.querySelector('button[type="button"]').click();
    fixture.detectChanges();

    expect(component.usuarios).toEqual([]);
    expect(fixture.nativeElement.textContent).toContain('Nenhum usuário cadastrado.');
  });
});
