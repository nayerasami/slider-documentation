import { Component, TemplateRef, ViewChild } from '@angular/core';
import { SleekSliderComponent } from 'sleek-slider';


@Component({
  selector: 'app-custom-indicators',
  imports: [SleekSliderComponent],
  templateUrl: './custom-indicators.component.html',
  styleUrl: './custom-indicators.component.scss'
})
export class CustomIndicatorsComponent {
@ViewChild('sliderEl') sliderEl !:HTMLElement;
@ViewChild('customIndicatorTemplate') customIndicatorTemplate!: TemplateRef<any>;

 responsiveOptions: any[] = [
    { breakpoint: '1400px', numVisible: 3, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

  customIndicatorsOptions: any = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',
  };
  customIndicatorsItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];

   ngAfterViewInit():void{
    this.customIndicatorsOptions ={
      ...this.customIndicatorsOptions ,
      customIndicators: this.customIndicatorTemplate
    }
  }
  sliderParentTS: string = `
  import { SleekSliderComponent } from 'sleek-slider';


  @Component({
  imports: [SleekSliderComponent],
  })

  @ViewChild('sliderEl') sliderEl !:HTMLElement;
  @ViewChild('customIndicatorTemplate') customIndicatorTemplate!: TemplateRef<any>;
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
  ];

  ngAfterViewInit():void{
    this.options ={
      ...this.options ,
      customIndicators: this.customIndicatorTemplate
    }
  }
  `;
}
