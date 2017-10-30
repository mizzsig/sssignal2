import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PostService } from './post.service';

const animateTime = '300ms ease';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() url: string;
  posts: any = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts(this.url).subscribe(posts => {
      this.posts = posts;
    });
  }

}
