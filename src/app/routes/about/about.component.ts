import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from './../../commons/header/header.component';
import { MainComponent } from './../../commons/main/main.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  readonly list1 = [
    "/assets/img/about1.png",
    "/assets/img/about2.png",
    "/assets/img/about3.png",
    "/assets/img/about4.png",
    "/assets/img/about5.png",
  ];

  readonly list2 = [
    "/assets/img/about6.png",
    "/assets/img/about7.png",
    "/assets/img/about8.png",
    "/assets/img/about9.png",
    "/assets/img/about10.png",
  ];

  constructor() { }

  ngOnInit() {
  }

}
