import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-select-escola',
  templateUrl: './select-escola.component.html',
  styleUrls: ['./select-escola.component.css'],
})
export class SelectEscolaComponent implements OnInit {
  constructor() {}
  escolas: any[] = [];
  dadoSelect: number = 0;
  canInativar: boolean = false;
  @Output()
  dadoChange = new EventEmitter<any>();
  @Input() get dado(){
    return this.dadoSelect;
  }
  set dado(val) {
    this.dadoSelect = val;
    this.dadoChange.emit(val);
  }

  ngOnInit(): void {
    this.escolas = [
      {
        text: 'Sao Pedro Miguel',
        id: 1,
      },
      {
        text: 'Halley',
        id: 2,
      },
    ];
  }
}
