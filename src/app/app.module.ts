import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { TweetComponent } from './tweet/tweet.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TwitterService } from './twitter.service';
import { SvgComponent } from './svg/svg.component';

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
    InlineSVGModule,
  ],
  providers: [
    TwitterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
