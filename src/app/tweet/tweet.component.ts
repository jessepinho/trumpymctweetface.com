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
  styleUrls: ['./tweet.component.sass']
})
export class TweetComponent implements OnChanges {
  @Input() tweet: Tweet;
  intensity: number;

  constructor(
    private service: TwitterService,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('tweet')) {
      this.intensity = this.service.getTweetIntensity(this.tweet);
    }
  }
}
