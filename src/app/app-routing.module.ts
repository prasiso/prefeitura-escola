import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Escola
import { ListagemComponent } from '../app/page/escola/listagem/listagem.component';
import { FormComponent } from './page/escola/form/form.component';

//Turma
import { TurmaListagemComponent } from '../app/page/turma/turma-listagem/turma-listagem.component';
import { TurmaFormularioComponent } from './page/turma/turma-formulario/turma-formulario.component';

const routes: Routes = [
  //Escola
  { path: 'escola', component: ListagemComponent },
  { path: 'escola/:id', component: FormComponent },

  //Turma
  { path: 'turma-listagem/:id', component: TurmaListagemComponent },
  { path: 'turma-formulario/:id', component: TurmaFormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
