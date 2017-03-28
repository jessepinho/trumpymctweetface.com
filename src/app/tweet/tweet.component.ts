import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit, OnChanges {
  @Input() private tweet: string = 'We are going to MAKE AMERICA GREAT AGAIN!';

  private intensity: number;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
