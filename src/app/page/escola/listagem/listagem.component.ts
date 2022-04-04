import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-escola-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  constructor(private modalService: NgbModal, private route: Router,) {}
  closeResult: string = '';
  rows: any[] = [];
  dados: any = {};
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
  listaForm(log: any) {
    this.route.navigate([`/turma-listagem/${log.id}`])
  }
  editarForm(log: any) {
    this.route.navigate([`/escola/${log.id}`])

  }
  variaveis(){
    this.buttons = [
      {
        text: 'Adicionar',
        color: 'success',
        link: '/escola/0',
      },
    ];
    this.bread = [
      {
        text: 'Escola',
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
