import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-examples',
  imports: [],
  templateUrl: './slider-examples.component.html',
  styleUrl: './slider-examples.component.css'
})
export class SliderExamplesComponent {
  constructor(public router: Router) { }


  sliderTypes = [
    { name: 'Simple Slider', url: 'simple-slider' },
    { name: 'Multiple Items Slider', url: 'muliple-slider' },
    { name: 'Autoplay Slider', url: 'autoplay' },
    { name: 'RTL', url: 'rtl' },
    { name: 'Infinite Scroll', url: 'infinite-scroll' },
    { name: 'Draggable', url: 'draggable' },
    { name: 'Animation', url: 'animation' },
    { name: 'Custom indicators', url: 'custom-indicators' },
    { name: 'Gallery Images Indicators', url: 'gallery-images' },
    { name: 'Height', url: 'height' },
    { name: 'Vertical Slider', url: 'vertical-slider' },
    { name: 'Custom Navigation Buttons', url: 'custom-navigation-buttons' },
    { name: 'Multiple Rows Slider', url: 'muliple-rows' },
    { name: 'Responsive Display', url: 'responsive-display' },
  ]
}
