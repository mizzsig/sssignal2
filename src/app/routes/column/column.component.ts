import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss', './../../commons/main/style.scss']
})
export class ColumnComponent implements OnInit {
  url = '/api/posts/column';

  constructor() { }

  ngOnInit() {
  }

}
