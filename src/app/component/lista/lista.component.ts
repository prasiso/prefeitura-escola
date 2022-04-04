import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  //Dados
  @Input() rows!: any[];
  @Input() columns!: any[];
  @Input() buttons!: any[];

  // Props
  @Input() canDelete: boolean = true;
  @Input() canEditar: boolean = true;
  @Input() canListagem: boolean = true;
  @Input() canVer: boolean = true;
  @Input() canLista: boolean = true;

  //Funcoes
  @Output() ver = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() editar = new EventEmitter();
  @Output() lista = new EventEmitter();

  constructor(private modalService: NgbModal) {}
  verFuncao(log: any) {
    this.ver.emit(log);
  }
  deleteFuncao(log: any) {
    this.delete.emit(log);
  }
  editarFuncao(log: any) {
    this.editar.emit(log);
  }
  listaFuncao(log: any) {
    this.lista.emit(log);
  }
  ngOnInit(): void {}
}
