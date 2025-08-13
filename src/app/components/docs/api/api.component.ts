import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {
  constructor(public router : Router){}
  sliderOptions: any = [
    {
      property: 'Number of Visible items',
      propertyName: 'numberOfVisibleItems',
      type: 'number',
      description: 'Items visible per row (default: 1)'
    },
    {
      property: 'Number of Rows',
      propertyName: 'rows',
      type: 'number',
      description: 'Number of rows (default: 1)'
    },
    {
      property: 'Infinite Scroll',
      propertyName: 'infiniteScroll',
      type: 'boolean',
      description: 'Enable infinite scrolling (default: false)'
    },
    {
      property: 'Step Size',
      propertyName: 'stepSize',
      type: 'number',
      description: 'Items to scroll per step (default: 1)'
    },
    {
      property: 'Space Between',
      propertyName: 'spaceBetween',
      type: 'number',
      description: 'Custom space between items in px (default: 12px)'
    },
    {
      property: 'Animation Speed',
      propertyName: 'animationSpeed',
      type: 'string',
      description: "Animation duration (e.g., '0.6s')"
    },
    {
      property: 'Animation Type',
      propertyName: 'animation',
      type: `'linear' | 'ease-in-out' | 'ease-out' | 'ease-in' | 'ease'`,
      description: 'Animation easing (default: linear)'
    },
    {
      property: 'Slider Indicators',
      propertyName: 'indicators',
      type: 'boolean',
      description: 'Show indicators (default: false)'
    },
    {
      property: 'Dargging',
      propertyName: 'isDraggable',
      type: 'boolean',
      description: 'Enable dragging (default: true)'
    },
    {
      property: 'Right to Left ',
      propertyName: 'rtl',
      type: 'boolean',
      description: 'Right-to-left layout (default: false)'
    },
    {
      property: 'Custom Next Button',
      propertyName: 'nextButton',
      type: 'string',
      description: 'Custom next button element (icon/image with styling)'
    },
    {
      property: 'Custom Previous Button',
      propertyName: 'prevButton',
      type: 'string',
      description: 'Custom previous button element (icon/image with styling)'
    },
    {
      property: 'Autoplay',
      propertyName: 'autoplay',
      type: 'boolean',
      description: 'Enable autoplay (default: false)'
    },
    {
      property: 'Autoplay Speed',
      propertyName: 'autoplaySpeed',
      type: 'number',
      description: 'Autoplay interval in seconds (default: 3)'
    },
    {
      property: 'Custom Slider Indicators',
      propertyName: 'customIndicators',
      type: 'Template Reference',
      description: 'Allows you to define custom HTML elements for slider indicators using an <ng-template>. Access the template via @ViewChild, and assign the reference to the "sliderOptions" object within the ngAfterViewInit lifecycle hook. This enables full customization and integration of indicator components with the slider logic.'
    },
    {
      property: 'Slider Height',
      propertyName: 'height',
      type: 'string',
      description: 'Specifies the height of the slider. Accepts any valid CSS height value (e.g., "300px", "50vh"). Default is "300px".'
    },
    {
      property: 'Vertical',
      propertyName: 'vertical',
      type: 'boolean',
      description: 'Determines the orientation of the slider. When set to true, the slider scrolls vertically instead of horizontally. Default is false.'
    },
    {
      property: 'Indicators Gallery Images',
      propertyName: 'galleryImages',
      type: 'GalleryImage[]',
      description: 'Displays a gallery of images as custom indicators for the slider. Each image in the array is used as an indicator representing a corresponding slide.'
    }

  ];
}
