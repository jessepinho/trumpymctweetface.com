import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTweetComponent } from './single-tweet.component';

describe('SingleTweetComponent', () => {
  let component: SingleTweetComponent;
  let fixture: ComponentFixture<SingleTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTweetComponent ]
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
