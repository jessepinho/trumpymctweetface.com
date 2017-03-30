import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

const BASE_SPEED = 2500;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  private currentTweetIndex: number = 0;
  private speed: number = 5;
  private tweets: Tweet[] = this.service.getTweets();

  constructor(
    private service: TwitterService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.nextTweet();
    });
  }

  private nextTweet(): void {
    this.currentTweetIndex++;

    if (this.currentTweetIndex >= this.tweets.length) {
      this.currentTweetIndex = 0;
    }

    setTimeout(this.nextTweet.bind(this), BASE_SPEED / this.speed);
  }
}
