import { Component } from '@angular/core';
import { SleekSliderComponent } from 'sleek-slider';


@Component({
  selector: 'app-rtl',
  imports: [SleekSliderComponent],
  templateUrl: './rtl.component.html',
  styleUrl: './rtl.component.css'
})
export class RtlComponent {
  responsiveOptions: any[] = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 2 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

  RTLSliderItems = [
    { id: 1, name: 'slide 1' },
    { id: 2, name: 'slide 2' },
    { id: 3, name: 'slide 3' },
    { id: 4, name: 'slide 4' },
    { id: 5, name: 'slide 5' },
    { id: 6, name: 'slide 6' },

  ];

  RTLSliderOptions: any = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    numberOfVisibleItems: 2,
    stepSize: 1,
    rtl: true,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',

  };
   sliderParentTS: string = `
  import { SleekSliderComponent } from 'sleek-slider';


  @Component({
  imports: [SleekSliderComponent],
  })
  items = [1, 2, 3, 4, 5, 6];

  options = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    numberOfVisibleItems: 2,
    stepSize: 1,
    rtl: true,
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
