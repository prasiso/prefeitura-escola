import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prefeituraEscola';
  constructor() {}
  rows: any[] = [];
  bread: any[] = [];
  columns: any[] = [];
  buttons: any[] = [];
  ngOnInit(): void {
    // this.route.navigate([`/escola`])
  }
}
