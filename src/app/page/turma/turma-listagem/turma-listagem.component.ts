import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from '../../../service/';

@Component({
  selector: 'app-turma-listagem',
  templateUrl: './turma-listagem.component.html',
  styleUrls: ['./turma-listagem.component.css'],
})
export class TurmaListagemComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private route: Router,
    private rotaAtual: ActivatedRoute,
    private serviceTurma: TurmaService
  ) {}
  closeResult: string = '';
  rows: any[] = [];
  rowsBackup: any[] = [];
  dados: any = {};
  escola: number = 1;
  columns: any[] = [
    {
      label: 'Identificador',
      key: 'id',
    },
    {
      label: 'Nome',
      key: 'nome',
    },
  ];
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
    const result = await this.serviceTurma.listAll(idEscola);
    this.rows = result;
  }
  async ngOnInit() {
    const id = Number(this.rotaAtual.snapshot.paramMap.get('id'));
    this.escola = id;
    this.loadTurma(id);
  }
}
