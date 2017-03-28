import { Component, OnInit } from '@angular/core';
import tweets from './tweets';

interface Tweet {
  text: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  private currentTweetIndex: number = 0;

  private tweets: Tweet[] = tweets.map(({ text }) => ({ text }));

  ngOnInit(): void {
    setInterval(() => {
      this.currentTweetIndex++;
      if (this.currentTweetIndex >= this.tweets.length) {
        this.currentTweetIndex = 0;
      }
    }, 250);
  }
}
