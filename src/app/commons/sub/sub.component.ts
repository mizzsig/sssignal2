import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {

  constructor(private ng4TwitterTimelineModule: Ng4TwitterTimelineModule) { }

  ngOnInit() {
  }

}
