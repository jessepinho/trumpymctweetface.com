import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.sass']
})
export class FaceComponent implements OnInit {
  private color: string = 'rgb(222, 140, 93)';

  constructor() { }

  ngOnInit() {
  }

}
