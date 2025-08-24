import { Component } from '@angular/core';
import { SleekSliderComponent } from 'sleek-slider';


@Component({
  selector: 'app-multiple-rows',
  imports: [SleekSliderComponent],
  templateUrl: './multiple-rows.component.html',
  styleUrl: './multiple-rows.component.scss'
})
export class MultipleRowsComponent {
  multipleRowsSliderItems = [
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
    { id: 13, name: 'slide 13' },
    { id: 14, name: 'slide 14' },
    { id: 15, name: 'slide 15' },
  ];

  multipleRowsSliderOptions:any = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    numberOfVisibleItems: 3,
    stepSize: 2,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',
    rows: 2,
    spaceBetween:16

  };
    responsiveOptions: any[] = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 2 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

    sliderParentTS: string = `
  import { SleekSliderComponent } from 'sleek-slider';


  @Component({
  imports: [SleekSliderComponent],
  })
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12, 13 ,14 ,15 ];

  options = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    numberOfVisibleItems: 3,
    stepSize: 2,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',
    rows: 2,
    spaceBetween:16

  };


  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];`;

}
