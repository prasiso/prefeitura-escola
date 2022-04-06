import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaFormularioComponent } from './turma-formulario.component';

describe('TurmaFormularioComponent', () => {
  let component: TurmaFormularioComponent;
  let fixture: ComponentFixture<TurmaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
