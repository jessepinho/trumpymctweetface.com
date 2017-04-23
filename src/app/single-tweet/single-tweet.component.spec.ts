import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../app.module';
import { SingleTweetComponent } from './single-tweet.component';

describe('SingleTweetComponent', () => {
  let component: SingleTweetComponent;
  let fixture: ComponentFixture<SingleTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
