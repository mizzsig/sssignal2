import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from './../../commons/post/post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss', './../../commons/main/style.scss']
})
export class ArticleComponent implements OnInit {
  id  = '';
  post: any = [];

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.id = params['id']
    );

    this.postService.getPosts('/api/post/' + this.id).subscribe(post => {
      this.post = post[0];
    });
  }

}
