import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { TurmaService } from '../../../service/';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turma-formulario',
  templateUrl: './turma-formulario.component.html',
  styleUrls: ['./turma-formulario.component.css']
})
export class TurmaFormularioComponent implements OnInit {

  constructor(
    private rotaAtual: ActivatedRoute,
    private rota: Router,
    private serviceTurma: TurmaService,
    ) { }
  bread: any[] = [
    {
      text: 'Turma',
    },
    {
      text: 'Formulario',
      color: 'gray',
    },
  ];
  escola: number = 0
  buttons: any[] = [
    {
      text: 'Voltar',
      color: 'warning',
      link: '/turma-listagem/0',
    },
  ];;
  opcao: string = 'A';
  id_backup: number = 0;
  dados: any = { id: '', nome: '' };
 async EditarOuAdicionar(){
    const id = Number(this.rotaAtual.snapshot.paramMap.get('id'));
    if (id !== 0) {
      await this.loadTurma(id);
      this.opcao = 'E';
    }
  }
  async loadTurma(id: number) {
    const x = await this.serviceTurma.getId(id);
    this.id_backup = x.id
    this.dados = x;
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
    if(this.opcao === 'A'){
      dados.id = (await this.serviceTurma.listAll()).length + 1
      var resp = await this.serviceTurma.post(dados);
    } else {
      dados.id = this.id_backup
      resp = await this.serviceTurma.update(dados);
      
    }
    if (resp.status == 200) {
      Swal.fire({
        title: 'Adicionado com Sucesso',
        icon: 'success',
      });
      this.rota.navigate([`/escola`]);
    } else {
      Swal.fire({
        title: resp.texto,
        icon: 'error',
      });
      return
    }
  }
  ngOnInit(): void {
    this.EditarOuAdicionar()
  }

}
