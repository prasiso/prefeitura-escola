import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { ListaComponent } from './component/lista/lista.component';
import { SubHeaderComponent } from './component/sub-header/sub-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
