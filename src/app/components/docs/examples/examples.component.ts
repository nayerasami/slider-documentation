import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
  selector: 'app-examples',
  imports: [AppRoutingModule],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.css'
})
export class ExamplesComponent {
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
    { name: 'Adaptive Height', url: 'height' },
    { name: 'Vertical Slider', url: 'vertical-slider' },
    { name: 'Custom Navigation Buttons', url: 'custom-navigation-buttons' },
    { name: 'Multiple Rows Slider', url: 'muliple-rows' },
    { name: 'Responsive Display', url: 'responsive-display' },
  ]

}
