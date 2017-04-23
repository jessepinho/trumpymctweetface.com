import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { APIHostProvider } from './helpers/api-host';
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
  ],
  providers: [
    APIHostProvider,
    TwitterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
