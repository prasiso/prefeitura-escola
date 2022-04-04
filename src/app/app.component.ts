import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prefeituraEscola';
  constructor(private route: Router) {}
  rows: any[] = [];
  bread: any[] = [];
  columns: any[] = [];
  buttons: any[] = [];
  verForm(log: any) {
    console.log(log);
  }
  deleteForm(log: any) {
    console.log(log);
  }
  listaForm(log: any) {
    console.log(log);
  }
  editarForm(log: any) {
    console.log(log);
  }
  ngOnInit(): void {
    this.route.navigate([`/escola`])
  }
}
