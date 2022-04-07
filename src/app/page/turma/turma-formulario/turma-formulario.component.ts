import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../../../service/';
import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';

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
  escola: string = '0';
  id: string = uuid();
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
    const id = String(this.rotaAtual.snapshot.paramMap.get('id'));
    const idEscola = String(
      this.rotaAtual.snapshot.queryParamMap.get('idEscola')
    );
    if (idEscola && idEscola !== '0') {
      this.buttons[0].link = `/turma-listagem/${idEscola}`
      this.escola = idEscola;
    }
    if (id !== '0') {
      await this.loadTurma(id);
      this.opcao = 'E';
    }
  }
  
  async loadButtons(id: string) {
    this.buttons[0].link = `/turma-listagem/${id}`
  }
  async loadTurma(id: string) {
    const resp = await this.serviceTurma.getId(id);
    this.id_backup = resp.id;
    this.escola = resp.idEscola;
    this.dados = resp;
    
    this.loadButtons(resp.idEscola)
  }
  async gravar(dados: any) {
    const op = this.opcao
    if (!dados.nome) {
      Swal.fire({
        title: 'Campo vazio',
        text: 'Campo nome vazio',
        icon: 'warning',
      });
      return;
    }
    dados.idEscola = this.escola;
    if (!dados.idEscola || dados.idEscola == '0') {
      Swal.fire({
        title: 'Campo vazio',
        text: 'Campo Turma vazio',
        icon: 'warning',
      });
      return;
    }
    if (this.opcao === 'A') {
      dados.id = this.id;
      var resp = await this.serviceTurma.post(dados);
    } else {
      dados.id = this.id_backup;
      resp = await this.serviceTurma.update(dados);
    }
    if (resp.status == 200) {
      Swal.fire({
        title: `${op === 'A'?'Adicionado':'Atualizado'} com Sucesso`,
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
