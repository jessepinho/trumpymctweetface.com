import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { SvgComponent } from './svg/svg.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TweetComponent } from './tweet/tweet.component';
import { TwitterService } from './twitter.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FaceComponent,
        SvgComponent,
        TimelineComponent,
        TweetComponent,
      ],
      providers: [
        TwitterService,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
