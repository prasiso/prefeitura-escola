import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turma-listagem',
  templateUrl: './turma-listagem.component.html',
  styleUrls: ['./turma-listagem.component.css']
})
export class TurmaListagemComponent implements OnInit {

  constructor(private modalService: NgbModal, private route: Router,) { }
  closeResult: string = '';
  rows: any[] = [];
  dados: any = {};
  escola: number = 1;
  bread: any[] = [];
  columns: any[] = [];
  buttons: any[] = [];

  verForm(log: any, content: any = undefined ) { 
    this.dados = log
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size:'lg' })
  }
  deleteForm(log: any) {
    console.log(log);
  }
  editarForm(log: any) {
    this.route.navigate([`/turma-formulario/${log.id}`])

  }
  variaveis(){
    this.buttons = [
      {
        text: 'Adicionar',
        color: 'success',
        link: '/turma-formulario/0',
      },
    ];
    this.bread = [
      {
        text: 'Turma',
      },
      {
        text: 'Listagem',
        color: 'gray',
      },
    ];
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
  ngOnInit(): void {
    this.variaveis()
  }

}
