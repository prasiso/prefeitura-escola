import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolaService } from '../../../service/';
import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private rotaAtual: ActivatedRoute,
    private rota: Router,
    private serviceEscola: EscolaService
  ) {}
  id: string = uuid();
  bread: any[] = [
    {
      text: 'Escola',
    },
    {
      text: 'Formulario',
      color: 'gray',
    },
  ];
  buttons: any[] = [
    {
      text: 'Voltar',
      color: 'warning',
      link: '/escola',
    },
  ];
  id_backup: number = 0;
  opcao: string = 'A';
  dados: any = { id: '', nome: '' };
  async EditarOuAdicionar() {
    const id = String(this.rotaAtual.snapshot.paramMap.get('id'));
    if (id !== '0') {
      await this.loadEscola(id);
      this.opcao = 'E';
    }
  }
  async loadEscola(id: string) {
    const x = await this.serviceEscola.getId(id);
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
      dados.id = this.id
      var resp = await this.serviceEscola.post(dados);
    } else {
      dados.id = this.id_backup
      resp = await this.serviceEscola.update(dados);
      
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
    this.EditarOuAdicionar();
  }
}
