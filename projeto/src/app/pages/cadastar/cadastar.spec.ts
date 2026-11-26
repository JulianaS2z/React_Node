import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastar } from './cadastar';

describe('Cadastar', () => {
  let component: Cadastar;
  let fixture: ComponentFixture<Cadastar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadastar],
    }).compileComponents();

    fixture = TestBed.createComponent(Cadastar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
