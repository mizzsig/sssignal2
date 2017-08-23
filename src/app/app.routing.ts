import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './routes/top/top.component';
import { AboutComponent } from './routes/about/about.component';

const myRoutes = [
  { path: '', component: TopComponent },
  { path: 'about', component: AboutComponent }
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
