import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-single-tweet',
  templateUrl: './single-tweet.component.html',
  styleUrls: ['./single-tweet.component.css']
})
export class SingleTweetComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;
  private loading: boolean = false;
  private tweet: Tweet;

  constructor(
    private route: ActivatedRoute,
    private service: TwitterService,
  ) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(({ id }) => this.loadTweet(id));
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  private loadTweet(id: string): void {
    this.loading = true;

    this.service
      .getTweet(id)
      .subscribe(
        tweet => this.tweet = tweet,
        () => {},
        () => this.loading = false,
      );
  }
}
