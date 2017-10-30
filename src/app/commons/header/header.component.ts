import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly menu = [
     { "text" : "About", "url" : "/about" }
    ,{ "text" : "Game", "url" : "/game" }
    ,{ "text" : "Soft", "url" : "/soft" }
    ,{ "text" : "Column", "url" : "/column"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
