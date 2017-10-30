// node_module からインポートしたもの
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// Angularでアニメーションを実装するためのモジュール
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// App本体
import { AppComponent } from './app.component';
// ルーティング
import { MY_ROUTES } from './app.routing';
// ルーティング用コンポーネント
import { IndexComponent } from './routes/index/index.component';
import { AboutComponent } from './routes/about/about.component';
import { GameComponent } from './routes/game/game.component';
import { SoftComponent } from './routes/soft/soft.component';
import { ColumnComponent } from './routes/column/column.component';
import { ArticleComponent } from './routes/article/article.component';
// UI部品
import { HeaderComponent } from './commons/header/header.component';
import { PostComponent } from './commons/post/post.component';
// サービス
import { PostService } from './commons/post/post.service';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    HeaderComponent,
    SoftComponent,
    GameComponent,
    ColumnComponent,
    PostComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MY_ROUTES
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
