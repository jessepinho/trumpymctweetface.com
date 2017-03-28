import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { intensity } from '../helpers/intensity';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnChanges {
  @Input() private tweet: Tweet;

  constructor(
    private service: TwitterService,
  ) {}

  private intensity: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('tweet')) {
      this.intensity = this.service.getTweetIntensity(this.tweet);
    }
  }
}
