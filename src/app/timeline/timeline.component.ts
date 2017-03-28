import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  private currentTweetIndex: number = 0;
  private tweets: Tweet[] = this.service.getTweets();

  constructor(
    private service: TwitterService,
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentTweetIndex++;
      if (this.currentTweetIndex >= this.tweets.length) {
        this.currentTweetIndex = 0;
      }
    }, 250);
  }
}
