import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(private rotaAtual: ActivatedRoute) {}
  bread: any[] = [];
  buttons: any[] = [];
  opcao: string = 'A';
  dados: any = { id: '', nome: '' };
  variavel() {
    this.bread = [
      {
        text: 'Escola',
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
          link: '/escola',
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
