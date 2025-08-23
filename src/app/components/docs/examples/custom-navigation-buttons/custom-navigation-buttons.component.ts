import { Component } from '@angular/core';
import { SleekSliderComponent } from 'sleek-slider';


@Component({
  selector: 'app-custom-navigation-buttons',
  imports: [SleekSliderComponent],
  templateUrl: './custom-navigation-buttons.component.html',
  styleUrl: './custom-navigation-buttons.component.scss'
})
export class CustomNavigationButtonsComponent {
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
    spaceBetween:16

    // nextButton:'<img src="assets/images/icons/left-arrow.svg" width="25" height="24" alt="Icon" class=" filter-white img-flip" />',
    // prevButton:'<img src="assets/images/home/arrow-right.svg" width="25" height="24"  alt="Icon" class="filter-white img-flip" />'
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
