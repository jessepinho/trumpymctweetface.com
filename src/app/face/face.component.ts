import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Color from 'color';

const INITIAL_COLOR: string = 'rgb(222, 140, 93)';
const RED: string = 'rgb(255, 0, 0)';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.sass']
})
export class FaceComponent implements OnChanges {
  @Input() private intensity: number;

  private color: string = INITIAL_COLOR;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('intensity')) {
      this.color = Color(INITIAL_COLOR).mix(Color(RED), this.intensity);
    }
  }
}
