import { TestBed, inject } from '@angular/core/testing';

import { AppModule } from './app.module';
import { TwitterService } from './twitter.service';

describe('TwitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
  });

  it('should ...', inject([TwitterService], (service: TwitterService) => {
    expect(service).toBeTruthy();
  }));
});
