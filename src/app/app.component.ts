import { Component } from '@angular/core';
import {PixelPaint} from "./PixelPaint";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step1:string[][] = [];
  step2:string[][] = [];
  step3:string[][] = [];
  step4:string[][] = [];
  step5:string[][] = [];
  step6:string[][] = [];
  step7:string[][] = [];

  constructor(public pixelPaint:PixelPaint) {
    pixelPaint.fill(8, 2, "Yellow");
    this.step1 = pixelPaint.generateCanvas();
    pixelPaint.fill(8, 4, "Blue");
    this.step2 = pixelPaint.generateCanvas();
    pixelPaint.fill(9, 5, "Blue");
    this.step3 = pixelPaint.generateCanvas();
    pixelPaint.fillRow(3,2,7, "Blue");
    this.step4 = pixelPaint.generateCanvas();
    pixelPaint.fillRow(4,5,6, "Blue");
    this.step5 = pixelPaint.generateCanvas();
    pixelPaint.fillCol(3, 2,6, "Green");
    this.step6 = pixelPaint.generateCanvas();
    pixelPaint.flood(6,3, "Red");
    this.step7 = pixelPaint.generateCanvas();

  }
}
