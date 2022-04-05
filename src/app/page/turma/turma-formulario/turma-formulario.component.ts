import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../../../service/';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turma-formulario',
  templateUrl: './turma-formulario.component.html',
  styleUrls: ['./turma-formulario.component.css'],
})
export class TurmaFormularioComponent implements OnInit {
  constructor(
    private rotaAtual: ActivatedRoute,
    private rota: Router,
    private serviceTurma: TurmaService
  ) {}
  bread: any[] = [
    {
      text: 'Turma',
    },
    {
      text: 'Formulario',
      color: 'gray',
    },
  ];
  escola: number = 0;
  buttons: any[] = [
    {
      text: 'Voltar',
      color: 'warning',
      link: `/turma-listagem/0`
    },
  ];
  opcao: string = 'A';
  id_backup: number = 0;
  dados: any = { id: '', nome: '' };
  async EditarOuAdicionar() {
    const id = Number(this.rotaAtual.snapshot.paramMap.get('id'));
    const idEscola = Number(
      this.rotaAtual.snapshot.queryParamMap.get('idEscola')
    );
    if (idEscola && idEscola !== 0) {
      this.buttons[0].link = `/turma-listagem/${idEscola}`
      this.escola = idEscola;
    }
    if (id !== 0) {
      await this.loadTurma(id);
      this.opcao = 'E';
    }
  }
  
  async loadButtons(id: number) {
    this.buttons[0].link = `/turma-listagem/${id}`
  }
  async loadTurma(id: number) {
    const resp = await this.serviceTurma.getId(id);
    this.id_backup = resp.id;
    this.escola = resp.idEscola;
    this.dados = resp;
    
    this.loadButtons(resp.idEscola)
  }
  async gravar(dados: any) {
    if (!dados.nome) {
      Swal.fire({
        title: 'Campo vazio',
        text: 'Campo nome vazio',
        icon: 'warning',
      });
      return;
    }
    dados.idEscola = this.escola;
    if (!dados.idEscola) {
      Swal.fire({
        title: 'Campo vazio',
        text: 'Campo Turma vazio',
        icon: 'warning',
      });
      return;
    }
    if (this.opcao === 'A') {
      dados.id = (await this.serviceTurma.listAll()).length + 1;
      var resp = await this.serviceTurma.post(dados);
    } else {
      dados.id = this.id_backup;
      resp = await this.serviceTurma.update(dados);
    }
    if (resp.status == 200) {
      Swal.fire({
        title: 'Adicionado com Sucesso',
        icon: 'success',
      });
      this.rota.navigate([`/turma-listagem/${this.escola}`]);
    } else {
      Swal.fire({
        title: resp.texto,
        icon: 'error',
      });
      return;
    }
  }
  ngOnInit(): void {
    this.EditarOuAdicionar();
  }
}
