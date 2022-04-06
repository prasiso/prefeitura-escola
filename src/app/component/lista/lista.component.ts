import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit, OnChanges {

  rowsPaginacao: any[] = [];
  rowsArray: any[] = [];
  numberPagina: number= 1;
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
  
  constructor() {}
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
  separar(itens : any, maximo: any)  {
    return itens.reduce((acumulador: any, item: any, indice: any) => {
      const grupo = Math.floor(indice / maximo);
      acumulador[grupo] = [...(acumulador[grupo] || []), item];
      return acumulador;
    }, []);
  };
  rowsArrayFunction() {
    if (this.rows.length > 0) {
      var arraySeparado = this.separar(this.rows, 5);
      // debugger
      this.rowsArray = arraySeparado
      this.rowsPaginacao = arraySeparado[0];
    }
  }
  mudarPagina(pagina: number){
    this.rowsPaginacao = this.rowsArray[pagina]
    this.numberPagina = pagina+1
  }
 ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    // debugger
    if (changes.rows?.currentValue !==changes.rows?.previousValue) {
      this.rowsArrayFunction()
    }
  }
}
