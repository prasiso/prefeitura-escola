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
  numberPagina: number = 1;
  filtroComponent: any = {};
  filtroBollean: boolean = false;
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
  @Output() filtro = new EventEmitter();


  constructor() {}
  mudancaFiltro() {
    let filtroString = '';
    for (var [key, value] of Object.entries(this.filtroComponent)) {
      filtroString.length > 0
        ? (filtroString += `&${key}_like=${value}`)
        : (filtroString = `${key}_like=${value}`);
    }
    if(filtroString.length>0)
    this.filtroBollean = true
    this.filtro.emit(filtroString)
  }
  limparFiltro(){
    this.filtroComponent = {}
    this.filtroBollean = false
    this.filtro.emit("")
  }
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
  separar(itens: any, maximo: any) {
    return itens.reduce((acumulador: any, item: any, indice: any) => {
      const grupo = Math.floor(indice / maximo);
      acumulador[grupo] = [...(acumulador[grupo] || []), item];
      return acumulador;
    }, []);
  }
  rowsArrayFunction() {
    if (this.rows?.length > 0) {
      var arraySeparado = this.separar(this.rows, 5);
      this.rowsArray = arraySeparado;
      this.rowsPaginacao = arraySeparado[0];
    } else {
      this.rowsPaginacao = [];
    }
  }
  mudarPagina(pagina: number) {
    this.rowsPaginacao = this.rowsArray[pagina];
    this.numberPagina = pagina + 1;
  }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.rowsArrayFunction();
  }
}
