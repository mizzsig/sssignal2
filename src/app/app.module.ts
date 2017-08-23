import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';

import { MY_ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { TopComponent } from './routes/top/top.component';
import { AboutComponent } from './routes/about/about.component';
import { MainComponent } from './commons/main/main.component';
import { SubComponent } from './commons/sub/sub.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopComponent,
    MainComponent,
    SubComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng4TwitterTimelineModule,
    MY_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
