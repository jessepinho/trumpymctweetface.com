import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceComponent } from '../face/face.component';
import { TimelineComponent } from './timeline.component';
import { TweetComponent } from '../tweet/tweet.component';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FaceComponent,
        TimelineComponent,
        TweetComponent,
      ]
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
