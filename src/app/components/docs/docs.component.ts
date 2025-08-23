import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-docs',
  imports: [CommonModule, RouterModule],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {

  isExamplesActive = false
  constructor(public router: Router) {

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      this.isExamplesActive = this.router.url.includes('/examples')
    })

  }
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
