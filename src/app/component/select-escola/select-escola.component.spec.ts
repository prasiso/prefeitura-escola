import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEscolaComponent } from './select-escola.component';

describe('SelectEscolaComponent', () => {
  let component: SelectEscolaComponent;
  let fixture: ComponentFixture<SelectEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEscolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
