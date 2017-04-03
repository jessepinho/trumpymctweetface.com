import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

const MAX_DURATION_PER_TWEET = 5000;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  private currentTweetIndex: number = -1;
  private speed: number = 0.95;
  private tweets: Tweet[] = this.service.getTweets();

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

    setTimeout(this.nextTweet.bind(this), MAX_DURATION_PER_TWEET * (1 - this.speed));
  }
}
