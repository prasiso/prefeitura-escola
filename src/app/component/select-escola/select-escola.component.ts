import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EscolaService } from '../../service';

@Component({
  selector: 'app-select-escola',
  templateUrl: './select-escola.component.html',
  styleUrls: ['./select-escola.component.css'],
})
export class SelectEscolaComponent implements OnInit {
  constructor(private serviceEscola: EscolaService) {}

  escolas: any[] = [];
  dadoSelect: string = '';
  @Input() canInativar: boolean = false;
  @Output() dadoChange = new EventEmitter<any>();
  @Input() get dado() {
    return this.dadoSelect;
  }
  set dado(val) {
    this.dadoSelect = val;
    this.dadoChange.emit(val);
  }
  async loadEscola() {
    const results = await this.serviceEscola.listAll();
    results.map((result: any) => {
      result.text = result.nome;
    });

    this.escolas = results;
  }
  ngOnInit(): void {
    this.loadEscola();
  }
}
