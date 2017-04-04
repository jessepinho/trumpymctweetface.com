import { Injectable } from '@angular/core';

import { intensity } from './helpers/intensity';
const tweets = require('./twitter.service.data.json');

@Injectable()
export class TwitterService {
  private maxIntensity: number;

  getTweets(): Tweet[] {
    return tweets.map(({ id_str, text }) => ({ id_str, text }));
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
