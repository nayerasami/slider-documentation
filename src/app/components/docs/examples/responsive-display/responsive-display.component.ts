import { Component } from '@angular/core';
import { SleekSliderComponent } from 'sleek-slider';


@Component({
  selector: 'app-responsive-display',
  imports: [SleekSliderComponent],
  templateUrl: './responsive-display.component.html',
  styleUrl: './responsive-display.component.scss'
})
export class ResponsiveDisplayComponent {

  responsiveDisplaySliderOptions:any = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    numberOfVisibleItems: 4,
    stepSize: 3,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',
    spaceBetween:16
  };
   responsiveDisplaySliderItems = [
    { id: 1, name: 'slide 1' },
    { id: 2, name: 'slide 2' },
    { id: 3, name: 'slide 3' },
    { id: 4, name: 'slide 4' },
    { id: 5, name: 'slide 5' },
    { id: 6, name: 'slide 6' },
    { id: 7, name: 'slide 7' },
    { id: 8, name: 'slide 8' },
    { id: 9, name: 'slide 9' },
    { id: 10, name: 'slide 10' },
    { id: 11, name: 'slide 11' },
    { id: 12, name: 'slide 12' },
  ];
    responsiveOptions: any[] = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];
    sliderParentTS: string = `
  import { SleekSliderComponent } from 'sleek-slider';


  @Component({
  imports: [SleekSliderComponent],
  })
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12];

  options = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    numberOfVisibleItems: 4,
    stepSize: 3,
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
