import { Injectable } from '@angular/core';

import { intensity } from './helpers/intensity';
import tweets from './twitter.service.data';

@Injectable()
export class TwitterService {
  getTweets(): Tweet[] {
    return tweets.map(({ text }) => ({ text }));
  }

  getMaxIntensity(): number {
    return Math.max.apply(Math, tweets.map(({ text }) => intensity(text)));
  }
}
