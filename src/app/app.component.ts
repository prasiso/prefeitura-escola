import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prefeituraEscola';
  constructor() {}
  ngOnInit(): void {
    // this.route.navigate([`/escola`])
  }
}
