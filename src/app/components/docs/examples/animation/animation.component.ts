import { Component } from '@angular/core';
import { SleekSliderComponent } from 'sleek-slider';


@Component({
  selector: 'app-animation',
  imports: [SleekSliderComponent],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css'
})
export class AnimationComponent {
  multipleItemsSliderItems = [1, 2, 3, 4, 5, 6, ];

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
  import { SleekSliderComponent } from 'sleek-slider';


  @Component({
  imports: [SleekSliderComponent],
  })

  items = [1, 2, 3, 4, 5, 6, ];

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
