import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('rotateHexagon', [
      state('rotate-0', style({
        'transform': 'rotate({{currentRotation}}deg)',
        'transform-origin': 'left center'
      }), {params: {currentRotation: 0}}),
      state('rotate-60', style({
        'transform': 'rotate({{currentRotation}}deg)',
        'transform-origin': 'left center'
      }), {params: {currentRotation: 0}}),
      state('rotate-120', style({
        'transform': 'rotate({{currentRotation}}deg)',
        'transform-origin': 'left center'
      }), {params: {currentRotation: 0}}),
      state('rotate-180', style({
        'transform': 'rotate({{currentRotation}}deg)',
        'transform-origin': 'left center'
      }), {params: {currentRotation: 0}}),
      state('rotate-240', style({
        'transform': 'rotate({{currentRotation}}deg)',
        'transform-origin': 'left center'
      }), {params: {currentRotation: 0}}),
      state('rotate-300', style({
        'transform': 'rotate({{currentRotation}}deg)',
        'transform-origin': 'left center'
      }), {params: {currentRotation: 0}}),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class HomePage {

  public isRotating = false;
  public currentRotation = 0;
  public state = 'rotate-0';
  constructor(public navCtrl: NavController) {

  }

  getState() {
    let standardValue = this.standardizeValue(this.currentRotation);
    return `rotate-${standardValue}`;
  }

  standardizeValue(value) {
    if (value > 300) {
      if (value === 360 || value % 360 === 0) {
        return 0;
      }
      else {
        let newValue = value
        while (newValue > 360) {
          newValue = newValue - 360;
        }
        return newValue;
      }
    } else {
      return value;
    }
  }

  swipeEvent(e) {
    this.isRotating = true;
    this.currentRotation = this.currentRotation + 60;
    this.state = this.getState();
  }
}
