import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { ListaComponent } from './component/lista/lista.component';
import { SubHeaderComponent } from './component/sub-header/sub-header.component';
import { ListagemComponent } from './page/escola/listagem/listagem.component';
import { FormComponent } from './page/escola/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TurmaListagemComponent } from './page/turma/turma-listagem/turma-listagem.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaComponent,
    SubHeaderComponent,
    ListagemComponent,
    FormComponent,
    TurmaListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
