import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sleek-intro',
  imports: [],
  templateUrl: './sleek-intro.component.html',
  styleUrl: './sleek-intro.component.scss',
})
export class SleekIntroComponent {
  constructor(public router:Router){}
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
