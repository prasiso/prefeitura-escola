import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @Input() rows!: any[] 
  @Input() columns!: any[] 
  constructor() {}
  ngOnInit(): void {

  }
}
