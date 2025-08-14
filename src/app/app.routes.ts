import { Routes } from '@angular/router';
import { SleekIntroComponent } from './components/sleek-intro/sleek-intro.component';
import { DocsComponent } from './components/docs/docs.component';
import { GettingStartComponent } from './components/docs/getting-start/getting-start.component';
import { ApiComponent } from './components/docs/api/api.component';
import { ExamplesComponent } from './components/docs/examples/examples.component';
import { SimpleSliderComponent } from './components/docs/examples/simple-slider/simple-slider.component';
import { MultipleSliderComponent } from './components/docs/examples/multiple-slider/multiple-slider.component';
import { AutoplayComponent } from './components/docs/examples/autoplay/autoplay.component';
import { InfiniteScrollComponent } from './components/docs/examples/infinite-scroll/infinite-scroll.component';
import { RtlComponent } from './components/docs/examples/rtl/rtl.component';
import { CustomIndicatorsComponent } from './components/docs/examples/custom-indicators/custom-indicators.component';
import { CustomNavigationButtonsComponent } from './components/docs/examples/custom-navigation-buttons/custom-navigation-buttons.component';
import { HeightComponent } from './components/docs/examples/height/height.component';
import { DraggableComponent } from './components/docs/examples/draggable/draggable.component';
import { GalleryImagesComponent } from './components/docs/examples/gallery-images/gallery-images.component';
import { VerticalComponent } from './components/docs/examples/vertical/vertical.component';
import { AnimationComponent } from './components/docs/examples/animation/animation.component';
import { SliderExamplesComponent } from './components/docs/examples/slider-examples/slider-examples.component';
import { MultipleRowsComponent } from './components/docs/examples/multiple-rows/multiple-rows.component';
import { ResponsiveDisplayComponent } from './components/docs/examples/responsive-display/responsive-display.component';


export const routes: Routes = [
  { path: '', component: SleekIntroComponent, pathMatch: 'full' },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: '', redirectTo: 'getting-start', pathMatch: 'full' },
      { path: 'getting-start', component: GettingStartComponent },
      { path: 'api', component: ApiComponent },
      {
        path: 'examples',
        component: ExamplesComponent,
        children: [
          { path: '', component: SliderExamplesComponent },
          { path: 'simple-slider', component: SimpleSliderComponent },
          { path: 'muliple-slider', component: MultipleSliderComponent },
          { path: 'responsive-display', component: ResponsiveDisplayComponent },
          { path: 'muliple-rows', component: MultipleRowsComponent },
          { path: 'autoplay', component: AutoplayComponent },
          { path: 'animation', component: AnimationComponent },
          { path: 'infinite-scroll', component: InfiniteScrollComponent },
          { path: 'custom-indicators', component: CustomIndicatorsComponent },
          { path: 'custom-navigation-buttons', component: CustomNavigationButtonsComponent },
          { path: 'height', component: HeightComponent },
          { path: 'draggable', component: DraggableComponent },
          { path: 'gallery-images', component: GalleryImagesComponent },
          { path: 'vertical-slider', component: VerticalComponent },
          { path: 'rtl', component: RtlComponent },
        ]
      }

    ],
  },
];
