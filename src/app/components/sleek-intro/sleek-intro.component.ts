import { Component } from '@angular/core';
import { SliderComponent } from '@nayerasami/sleek-slider';

@Component({
  selector: 'app-sleek-intro',
  imports: [SliderComponent],
  templateUrl: './sleek-intro.component.html',
  styleUrl: './sleek-intro.component.scss',
})
export class SleekIntroComponent {
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
  import { SliderComponent } from '@nayerasami/sleek-slider';

  @Component({
  imports: [SliderComponent],
  })
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
  ];`;
}
