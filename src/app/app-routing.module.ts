import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Escola
import { ListagemComponent } from '../app/page/escola/listagem/listagem.component';

const routes: Routes = [
  { path: 'escola', component: ListagemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
