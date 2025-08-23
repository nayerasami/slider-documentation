import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from 'src/app/services/toast.service';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from '../../shared/slider/slider.component';
import { SleekSliderComponent } from 'sleek-slider';

import { Router } from '@angular/router';
@Component({
  selector: 'app-getting-start',
  standalone: true, // Added to explicitly mark as standalone
  imports: [CommonModule ,NgbTooltipModule ,SleekSliderComponent ], // Moved imports to decorator metadata
  templateUrl: './getting-start.component.html',
  styleUrls: ['./getting-start.component.css'] // Fixed styleUrl to styleUrls
})
export class GettingStartComponent {
  constructor(public toastService: ToastService , public router :Router ) {}
  copyCommand(elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID '${elementId}' not found.`);
      return;
    }

    const promptElement = element.querySelector('.prompt');
    let commandText = element.textContent || '';
    if (promptElement && promptElement.textContent) {
      commandText = commandText.replace(promptElement.textContent, '').trim();
    } else {
      commandText = commandText.trim();
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(commandText).then(() => {
         console.log('Command copied to clipboard!');
        },
        (err) => {
          console.error('Clipboard API error:', err);

        }
      );
    } else {
      console.warn('Clipboard API not available. Attempting fallback.');
    }
  }

    responsiveOptions: any[] = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 2 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];

  singleItemSliderOptions: any = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    infiniteScroll: true,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',
  };

  singleItemSliderItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  sliderParentTS: string = `
  import { SleekSliderComponent } from 'sleek-slider';


  @Component({
  imports: [SleekSliderComponent],
  })
  export class GettingStartComponent {

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  options = {
    numberOfVisibleItems: 4,
    rows: 2,
    infiniteScroll: true,
    stepSize: 1,
    animationSpeed: '0.6s',
    animation: 'linear'
  };

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 }
  ];
  }`;


}
