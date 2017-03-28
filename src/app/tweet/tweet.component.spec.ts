import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceComponent } from '../face/face.component';
import { TweetComponent } from './tweet.component';
import { TwitterService } from '../twitter.service';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FaceComponent,
        TweetComponent,
      ],
      providers: [
        TwitterService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
