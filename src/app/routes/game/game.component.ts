import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss', './../../commons/main/style.scss']
})
export class GameComponent implements OnInit {
  url = "/api/posts/game";

  constructor() { }

  ngOnInit() {
  }

}
