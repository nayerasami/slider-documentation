import { Component } from '@angular/core';
import { SliderComponent } from '@nayerasami/sleek-slider';

@Component({
  selector: 'app-draggable',
  imports: [SliderComponent],
  templateUrl: './draggable.component.html',
  styleUrl: './draggable.component.css'
})
export class DraggableComponent {
  multipleItemsSliderItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12, 13 ,14 ];

  multipleItemSliderOptions:any = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    numberOfVisibleItems: 3,
    stepSize: 2,
    draggable:true,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',
  };

  sliderParentTS: string = `
  import { SliderComponent } from '@nayerasami/sleek-slider';

  @Component({
  imports: [SliderComponent],
  })

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12, 13 ,14 ];

  options = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    numberOfVisibleItems: 3,
    stepSize: 2,
    draggable:true,
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
