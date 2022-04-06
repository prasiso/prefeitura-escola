import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaListagemComponent } from './turma-listagem.component';

describe('TurmaListagemComponent', () => {
  let component: TurmaListagemComponent;
  let fixture: ComponentFixture<TurmaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
