import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { EscolaService, TurmaService } from '../../../service/';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-escola-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
})
export class ListagemComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private route: Router,
    private serviceEscola: EscolaService,
    private serviceTurma: TurmaService
  ) {}

  closeResult: string = '';
  rows: any[] = [];
  dados: any = {};
  escola: number = 1;
  bread: any[] = [
    {
      text: 'Escola',
    },
    {
      text: 'Listagem',
      color: 'gray',
    },
  ];
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
      link: '/escola/0',
    },
  ];

  verForm(log: any, content: any = undefined) {
    this.dados = log;
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
  }
  filtroForm(log: any){
    this.loadInicio(log)
  }
  async deleteForm(log: any) {
    Swal.fire({
      title: 'Deseja excluir?',
      text: 'Não pode reverter',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const x = await this.serviceEscola.delete(log.id);
        if (x.status === 400) {
          Swal.fire({
            title: 'Deseja excluir todas as Turmas dessa escola?',
            text: 'Não pode reverter',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
          }).then(async (result) => {
            if (result.isConfirmed) {
              await this.serviceTurma.deleteEscola(log.id);
              Swal.fire(
                'Deletado!',
                'Escola e todas turmas associada aquela escola foram excluida com sucesso',
                'success'
              );
              await this.loadInicio();
            }
          });
        } else {
          Swal.fire('Deletado!', 'Escola deletada', 'success');
          await this.loadInicio();
        }
      }
    });
  }
  listaForm(log: any) {
    this.route.navigate([`/turma-listagem/${log.id}`]);
  }
  editarForm(log: any) {
    this.route.navigate([`/escola/${log.id}`]);
  }
  async loadInicio(filtro?:string) {
    const x = await this.serviceEscola.listAll(filtro?filtro:'');
    this.rows = x;
  }
  ngOnInit(): void {
    this.loadInicio();
  }
}
