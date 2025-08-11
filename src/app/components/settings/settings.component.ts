import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  sliderOptions:any = [
  {
    propertyName: 'numberOfVisibleItems',
    type: 'number',
    description: 'Items visible per row (default: 1)'
  },
  {
    propertyName: 'rows',
    type: 'number',
    description: 'Number of rows (default: 1)'
  },
  {
    propertyName: 'infiniteScroll',
    type: 'boolean',
    description: 'Enable infinite scrolling (default: false)'
  },
  {
    propertyName: 'stepSize',
    type: 'number',
    description: 'Items to scroll per step (default: 1)'
  },
  {
    propertyName: 'spaceBetween',
    type: 'number',
    description: 'Custom space between items in px (default: 12px)'
  },
  {
    propertyName: 'animationSpeed',
    type: 'string',
    description: "Animation duration (e.g., '0.6s')"
  },
  {
    propertyName: 'animation',
    type: `'linear' | 'ease-in-out' | 'ease-out' | 'ease-in' | 'ease'`,
    description: 'Animation easing (default: linear)'
  },
  {
    propertyName: 'indicators',
    type: 'boolean',
    description: 'Show indicators (default: false)'
  },
  {
    propertyName: 'isDraggable',
    type: 'boolean',
    description: 'Enable dragging (default: true)'
  },
  {
    propertyName: 'rtl',
    type: 'boolean',
    description: 'Right-to-left layout (default: false)'
  },
  {
    propertyName: 'nextButton',
    type: 'string',
    description: 'Custom next button element (icon/image with styling)'
  },
  {
    propertyName: 'prevButton',
    type: 'string',
    description: 'Custom previous button element (icon/image with styling)'
  },
  {
    propertyName: 'autoplay',
    type: 'boolean',
    description: 'Enable autoplay (default: false)'
  },
  {
    propertyName: 'autoplaySpeed',
    type: 'number',
    description: 'Autoplay interval in seconds (default: 3)'
  }
];

}
