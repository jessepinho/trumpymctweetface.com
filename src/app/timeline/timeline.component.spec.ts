import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceComponent } from '../face/face.component';
import { SvgComponent } from '../svg/svg.component';
import { TimelineComponent } from './timeline.component';
import { TweetComponent } from '../tweet/tweet.component';
import { TwitterService } from '../twitter.service';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FaceComponent,
        SvgComponent,
        TimelineComponent,
        TweetComponent,
      ],
      providers: [
        TwitterService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
