import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.sass']
})
export class TweetComponent {
  @Input() tweet: Tweet;
}
