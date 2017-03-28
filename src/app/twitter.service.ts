import { Injectable } from '@angular/core';

import { intensity } from './helpers/intensity';
import tweets from './twitter.service.data';

@Injectable()
export class TwitterService {
  private maxIntensity: number;

  getTweets(): Tweet[] {
    return tweets.map(({ text }) => ({ text }));
  }

  getTweetIntensity(tweet: Tweet): number {
    return intensity(tweet.text) / this.getMaxIntensity();
  }

  private getMaxIntensity(): number {
    if (typeof this.maxIntensity !== 'undefined') {
      return this.maxIntensity;
    }

    return this.maxIntensity = Math.max.apply(Math, tweets.map(({ text }) => intensity(text)));
  }
}
