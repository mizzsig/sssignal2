import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

const animateTime = '300ms ease';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger('onAbout', [
      state('off', style({
        background: 'url("/assets/top_600.png")'
      })),
      state('on', style({
        background: 'url("/assets/about_600.png")'
      })),
      transition('off <=> on', animate(animateTime))
    ]),
    trigger('onGame', [
      state('off', style({
        background: 'url("/assets/top_600.png")'
      })),
      state('on', style({
        background: 'url("/assets/game_600.png")'
      })),
      transition('off <=> on', animate(animateTime))
    ]),
    trigger('onSoft', [
      state('off', style({
        background: 'url("/assets/top_600.png")'
      })),
      state('on', style({
        background: 'url("/assets/soft_600.png")'
      })),
      transition('off <=> on', animate(animateTime))
    ]),
    trigger('onColumn', [
      state('off', style({
        background: 'url("/assets/top_600.png")'
      })),
      state('on', style({
        background: 'url("/assets/column_600.png")'
      })),
      transition('off <=> on', animate(animateTime))
    ]),
    trigger('onHistory', [
      state('off', style({
        background: 'url("/assets/top_600.png")'
      })),
      state('on', style({
        background: 'url("/assets/history_600.png")'
      })),
      transition('off <=> on', animate(animateTime))
    ])
  ]
})
export class IndexComponent implements OnInit {
  TopImg = '/assets/top_600.png';
  AboutFlag = 'off';
  AboutImg = '/assets/about_600.png';
  SoftFlag = 'off';
  SoftImg = '/assets/soft_600.png';
  GameFlag = 'off';
  GameImg = '/assets/game_600.png';
  ColumnFlag = 'off';
  ColumnImg = '/assets/column_600.png';
  HistoryFlag = 'off';
  HistoryImg = '/assets/history_600.png';

  constructor() { }

  ngOnInit() {
  }

  aboutMouseEnter() {
    this.AboutFlag = 'on';
  }

  aboutMouseLeave() {
    this.AboutFlag = 'off';
  }

  gameMouseEnter() {
    this.GameFlag = 'on';
  }

  gameMouseLeave() {
    this.GameFlag = 'off';
  }

  softMouseEnter() {
    this.SoftFlag = 'on';
  }

  softMouseLeave() {
    this.SoftFlag = 'off';
  }

  columnMouseEnter() {
    this.ColumnFlag = 'on';
  }

  columnMouseLeave() {
    this.ColumnFlag = 'off';
  }

  historyMouseEnter() {
    this.HistoryFlag = 'on';
  }

  historyMouseLeave() {
    this.HistoryFlag = 'off';
  }

}
