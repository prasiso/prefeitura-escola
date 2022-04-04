import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turma-listagem',
  templateUrl: './turma-listagem.component.html',
  styleUrls: ['./turma-listagem.component.css'],
})
export class TurmaListagemComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private route: Router,
    private rotaAtual: ActivatedRoute
  ) {}
  closeResult: string = '';
  rows: any[] = [];
  rowsBackup: any[] = [];
  dados: any = {};
  escola: number = 1;
  columns: any[] = [];
  buttons: any[] = [
    {
      text: 'Adicionar',
      color: 'success',
      link: '/turma-formulario/0',
    },
  ];
  bread: any[] = [
    {
      text: 'Turma',
    },
    {
      text: 'Listagem',
      color: 'gray',
    },
  ];

  verForm(log: any, content: any = undefined) {
    this.dados = log;
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }
  deleteForm(log: any) {
    console.log(log);
  }
  editarForm(log: any) {
    this.route.navigate([`/turma-formulario/${log.id}`]);
  }
 async loadTurma(idEscola: number) {
    if (this.rowsBackup.length == 0 && this.rows.length>0) {
      this.rowsBackup = this.rows;
    } else{
      await this.variaveis()
      this.rowsBackup = this.rows
    }
    const dadosBackup = this.rowsBackup;
    if (idEscola != 0) {
      this.rows = dadosBackup.filter((x) => x.idEscola == idEscola);
    }
  }
  variaveis() {
    this.rows = [
      {
        id: 1,
        idEscola: 1,
        nome: 'Kelwin de Souza',
      },
      {
        id: 2,
        idEscola: 1,
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
  async ngOnInit() {
    const id = Number(this.rotaAtual.snapshot.paramMap.get('id'));
    this.escola = id
    if(id !==0){
      await this.variaveis();
    }
    this.loadTurma(id);
  }
}
