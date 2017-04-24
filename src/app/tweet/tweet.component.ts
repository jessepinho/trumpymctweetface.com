import {
  Component,
  Input,
} from '@angular/core';

const packageJSON = require('../../../package.json');

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.sass']
})
export class TweetComponent {
  @Input() loading: boolean;
  @Input() tweet: Tweet;

  intensity: number;
  link: string;
  text: string;
  version: string = 'v' + packageJSON.version;

  ngOnChanges(changes) {
    if (changes.hasOwnProperty('loading') && this.loading) {
      this.intensity = 1;
      this.link = null;
      this.text = 'JUST A SEC!';
    }

    if (changes.hasOwnProperty('tweet') && this.tweet && !this.loading) {
      this.intensity = this.tweet.intensity;
      this.link = `https://twitter.com/realDonaldTrump/status/${this.tweet.id_str}`;
      this.text = this.tweet.text;
    }
  }
}
