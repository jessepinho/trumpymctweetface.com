import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import * as d3 from 'd3';

import { SvgComponent } from '../svg/svg.component';

const NORMAL_SKIN_TONE = '#ffe9bf';
const NEXT_LEVEL_SKIN_TONE = '#ff6f00';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.sass']
})
export class FaceComponent implements OnChanges {
  @Input() private intensity: number;

  private face;
  private mouthTop;
  private mouthBottom;
  private selection;

  private faceColor = d3
    .scaleLinear<string>()
    .domain([0, 1])
    .range([NORMAL_SKIN_TONE, NEXT_LEVEL_SKIN_TONE])
    .interpolate(d3.interpolateHcl);

  private mouthOpening = d3
    .scaleLinear<number>()
    .domain([0, 1])
    .range([0, 30]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('intensity') && this.selection) {
      this.transformFace();
    }
  }

  handleSVGLoaded(svg: SVGSVGElement): void {
    this.selection = d3.select(svg);

    this.face = this.selection.select('#face');
    this.mouthTop = this.selection.select('#mouthTop');
    this.mouthBottom = this.selection.select('#mouthBottom');

    this.transformFace();
  }

  private transformFace() {
    this.face
      .data([this.intensity])
      .transition()
      .duration(250)
      .attr('fill', d => this.faceColor(d));

    this.mouthTop
      .data([this.intensity])
      .transition()
      .duration(250)
      .attr('transform', d => `translate(0, -${this.mouthOpening(d)})`);

    this.mouthBottom
      .data([this.intensity])
      .transition()
      .duration(250)
      .attr('transform', d => `translate(0, ${this.mouthOpening(d)})`);
  }
}
