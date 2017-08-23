import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly menu = [
    { "text" : "Top", "url" : "/" },
    { "text" : "About", "url" : "/about" },
    { "text" : "Soft", "url" : "/soft" },
    { "text" : "Game", "url" : "/game" },
    { "text" : "Column", "url" : "/column"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
