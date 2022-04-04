import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-turma-formulario',
  templateUrl: './turma-formulario.component.html',
  styleUrls: ['./turma-formulario.component.css']
})
export class TurmaFormularioComponent implements OnInit {

  constructor(private rotaAtual: ActivatedRoute) { }
  bread: any[] = [];
  buttons: any[] = [];
  opcao: string = 'A';
  dados: any = { id: '', nome: '' };
  variavel() {
    this.bread = [
      {
        text: 'Turma',
      },
      {
        text: 'Formulario',
        color: 'gray',
      },
    ]
      this.buttons = [
        {
          text: 'Voltar',
          color: 'warning',
          link: '/turma-listagem/0',
        },
      ];
  }
  EditarOuAdicionar(){
    const id = this.rotaAtual.snapshot.paramMap.get('id')
    if(id !== '0'){
      this.opcao = 'E'
    }
  }
  ngOnInit(): void {
    this.variavel()
    this.EditarOuAdicionar()
  }

}
