import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { APIHostProvider } from './helpers/api-host';
import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { TweetComponent } from './tweet/tweet.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TwitterService } from './twitter.service';
import { SvgComponent } from './svg/svg.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: TimelineComponent,
      },
      {
        path: 'tweet/:id',
        component: TimelineComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FaceComponent,
    TweetComponent,
    TimelineComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
    APIHostProvider,
    TwitterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
