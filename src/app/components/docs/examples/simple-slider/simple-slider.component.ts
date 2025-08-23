import { Component } from '@angular/core';
import { SleekSliderComponent } from 'sleek-slider';


@Component({
  selector: 'app-simple-slider',
  imports: [SleekSliderComponent],
  templateUrl: './simple-slider.component.html',
  styleUrl: './simple-slider.component.css'
})
export class SimpleSliderComponent {
  responsiveOptions: any[] = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

  singleItemSliderOptions: any = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
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
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',
  };

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];`;
}
