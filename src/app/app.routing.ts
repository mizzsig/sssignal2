import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './routes/index/index.component';
import { AboutComponent } from './routes/about/about.component';
import { GameComponent } from './routes/game/game.component';
import { SoftComponent } from './routes/soft/soft.component';
import { ColumnComponent } from './routes/column/column.component';
import { ArticleComponent } from './routes/article/article.component';

const myRoutes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'game', component: GameComponent },
  { path: 'soft', component: SoftComponent },
  { path: 'column', component: ColumnComponent },
  { path: 'column/:id', component: ArticleComponent },
  { path: '**', component: IndexComponent }
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
