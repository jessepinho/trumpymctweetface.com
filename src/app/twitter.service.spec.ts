import { TestBed, inject } from '@angular/core/testing';

import { TwitterService } from './twitter.service';

describe('TwitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterService]
    });
  });

  it('should ...', inject([TwitterService], (service: TwitterService) => {
    expect(service).toBeTruthy();
  }));
});
