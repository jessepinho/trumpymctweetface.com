import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { intensity } from './intensity';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit, OnChanges {
  @Input() private tweet: string;

  private intensity: number;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('tweet')) {
      this.intensity = intensity(this.tweet);
    }
  }
}
