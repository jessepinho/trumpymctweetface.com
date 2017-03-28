import { Injectable } from '@angular/core';
import tweets from './twitter.service.data';

@Injectable()
export class TwitterService {
  getTweets(): Tweet[] {
    return tweets.map(({ text }) => ({ text }));
  }
}
