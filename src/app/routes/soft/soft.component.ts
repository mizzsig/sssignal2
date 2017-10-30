import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.scss', './../../commons/main/style.scss']
})
export class SoftComponent implements OnInit {
  url = '/api/posts/soft';

  constructor() { }

  ngOnInit() {
  }

}
