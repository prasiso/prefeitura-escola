import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prefeituraEscola';
  constructor() {}
  rows: any[] = [];
  bread: any[] = [];
  columns: any[] = [];
  buttons: any[] = [];
  verForm(log: any) {
    console.log(log);
  }
  deleteForm(log: any) {
    console.log(log);
  }
  listaForm(log: any) {
    console.log(log);
  }
  editarForm(log: any) {
    console.log(log);
  }
  ngOnInit(): void {
    this.buttons = [
      {
        text: 'Adicionar',
        color: 'success',
        link: 'escola/0'
      },
    ];
    this.bread=[
      {
        text:"Escola"
      },
      {
        text:"Listagem",
        color: "gray"
      },
    ]
    this.rows = [
      {
        id: 1,
        nome: 'Kelwin de Souza',
      },
      {
        id: 2,
        nome: 'Patricia de Souza',
      },
    ];
    this.columns = [
      {
        label: 'Identificador',
        key: 'id',
      },
      {
        label: 'Nome',
        key: 'nome',
      },
    ];
  }
}
