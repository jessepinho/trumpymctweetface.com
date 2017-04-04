import { Component, OnInit } from '@angular/core';

import { TwitterService } from '../twitter.service';
const packageJSON = require('../../../package.json');

const MAX_DURATION_PER_TWEET = 5000;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  currentTweetIndex: number = -1;
  speed: number = 0.95;
  tweets: Tweet[] = this.service.getTweets();
  version: string = 'v' + packageJSON.version;

  private timeout: number;

  constructor(
    private service: TwitterService,
  ) {}

  ngOnInit(): void {
    this.nextTweet();
  }

  private nextTweet(): void {
    this.currentTweetIndex++;

    if (this.currentTweetIndex >= this.tweets.length) {
      this.currentTweetIndex = 0;
    }

    this.play();
  }

  private play() {
    this.timeout = setTimeout(this.nextTweet.bind(this), MAX_DURATION_PER_TWEET * (1 - this.speed));
  }

  handleSpeedChange(speed: number): void {
    this.speed = speed;
    clearTimeout(this.timeout);

    if (speed !== 0) {
      this.play();
    }
  }
}
