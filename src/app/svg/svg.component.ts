import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements AfterViewInit {
  @Output() private svgLoaded: EventEmitter<SVGSVGElement> = new EventEmitter<SVGSVGElement>();

  constructor(
    private element: ElementRef
  ) {}

  ngAfterViewInit() {
    const svg: SVGSVGElement = this.element.nativeElement.getElementsByTagName('svg')[0];
    this.svgLoaded.emit(svg);
  }
}
