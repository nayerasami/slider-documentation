import { Component } from '@angular/core';
import { SleekSliderComponent } from 'sleek-slider';


@Component({
  selector: 'app-gallery-images',
  imports: [SleekSliderComponent],
  templateUrl: './gallery-images.component.html',
  styleUrl: './gallery-images.component.css'
})
export class GalleryImagesComponent {
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  sliderOptions = {
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    //infiniteScroll: true,
    // isDraggable: false,
    numberOfVisibleItems: 1,
    stepSize:1,
    spaceBetween:30,
    // rtl: true,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',
    rows: 1,
    height: '510px',
   // vertical: true,
    galleryImages:[
      'https://doodleipsum.com/3000x2000/flat?bg=D98D63&i=4f0a73f37c3672bcf5c214b62b690ba4',
      'https://doodleipsum.com/3000x2000/flat?bg=825DEB&i=ab89dafe8593452edb4829000c2a2434',
      'https://doodleipsum.com/3000x2000/outline?bg=D96363&i=fcb5bd61f88331a7ada8b0de52dbc714',
      'https://doodleipsum.com/3000x2000?bg=6392D9&i=89a1695c883cfff8c9a7505eef663f80',
      'https://doodleipsum.com/3000x2000/flat?bg=D98D63&i=4f0a73f37c3672bcf5c214b62b690ba4',
      'https://doodleipsum.com/3000x2000/flat?bg=825DEB&i=ab89dafe8593452edb4829000c2a2434',
      'https://doodleipsum.com/3000x2000/outline?bg=D96363&i=fcb5bd61f88331a7ada8b0de52dbc714',
      'https://doodleipsum.com/3000x2000?bg=6392D9&i=89a1695c883cfff8c9a7505eef663f80',
      'https://doodleipsum.com/3000x2000/avatar?bg=63C8D9&i=c8b5c7c26bb63f70bcfc4e3a54f337a8',
      'https://doodleipsum.com/3000x2000/hand-drawn?bg=63C8D9&i=53f5643e46456031345f79c152ccef6e',
      'https://doodleipsum.com/3000x2000/hand-drawn?bg=63C8D9&i=11a3d171a97916c9ab34237c49fd3a8c',
      'https://doodleipsum.com/3000x2000/avatar?bg=63C8D9&i=0bdc1ecca366772a1c4b55232ef1e6c5'
    ]

  };

  sliderItems =[
    'https://doodleipsum.com/3000x2000/flat?bg=D98D63&i=4f0a73f37c3672bcf5c214b62b690ba4',
    'https://doodleipsum.com/3000x2000/flat?bg=825DEB&i=ab89dafe8593452edb4829000c2a2434',
    'https://doodleipsum.com/3000x2000/outline?bg=D96363&i=fcb5bd61f88331a7ada8b0de52dbc714',
    'https://doodleipsum.com/3000x2000?bg=6392D9&i=89a1695c883cfff8c9a7505eef663f80',
    'https://doodleipsum.com/3000x2000/flat?bg=D98D63&i=4f0a73f37c3672bcf5c214b62b690ba4',
    'https://doodleipsum.com/3000x2000/flat?bg=825DEB&i=ab89dafe8593452edb4829000c2a2434',
    'https://doodleipsum.com/3000x2000/outline?bg=D96363&i=fcb5bd61f88331a7ada8b0de52dbc714',
    'https://doodleipsum.com/3000x2000?bg=6392D9&i=89a1695c883cfff8c9a7505eef663f80',
    'https://doodleipsum.com/3000x2000/avatar?bg=63C8D9&i=c8b5c7c26bb63f70bcfc4e3a54f337a8',
    'https://doodleipsum.com/3000x2000/hand-drawn?bg=63C8D9&i=53f5643e46456031345f79c152ccef6e',
    'https://doodleipsum.com/3000x2000/hand-drawn?bg=63C8D9&i=11a3d171a97916c9ab34237c49fd3a8c',
    'https://doodleipsum.com/3000x2000/avatar?bg=63C8D9&i=0bdc1ecca366772a1c4b55232ef1e6c5'

  ];
    sliderParentTS: string = `
  import { SleekSliderComponent } from 'sleek-slider';


  @Component({
  imports: [SleekSliderComponent],
  })

  items =[
    'https://doodleipsum.com/3000x2000/flat?bg=D98D63&i=4f0a73f37c3672bcf5c214b62b690ba4',
    'https://doodleipsum.com/3000x2000/flat?bg=825DEB&i=ab89dafe8593452edb4829000c2a2434',
    'https://doodleipsum.com/3000x2000/outline?bg=D96363&i=fcb5bd61f88331a7ada8b0de52dbc714',
    'https://doodleipsum.com/3000x2000?bg=6392D9&i=89a1695c883cfff8c9a7505eef663f80',
    'https://doodleipsum.com/3000x2000/flat?bg=D98D63&i=4f0a73f37c3672bcf5c214b62b690ba4',
    'https://doodleipsum.com/3000x2000/flat?bg=825DEB&i=ab89dafe8593452edb4829000c2a2434',
    'https://doodleipsum.com/3000x2000/outline?bg=D96363&i=fcb5bd61f88331a7ada8b0de52dbc714',
    'https://doodleipsum.com/3000x2000?bg=6392D9&i=89a1695c883cfff8c9a7505eef663f80',
    'https://doodleipsum.com/3000x2000/avatar?bg=63C8D9&i=c8b5c7c26bb63f70bcfc4e3a54f337a8',
    'https://doodleipsum.com/3000x2000/hand-drawn?bg=63C8D9&i=53f5643e46456031345f79c152ccef6e',
    'https://doodleipsum.com/3000x2000/hand-drawn?bg=63C8D9&i=11a3d171a97916c9ab34237c49fd3a8c',
    'https://doodleipsum.com/3000x2000/avatar?bg=63C8D9&i=0bdc1ecca366772a1c4b55232ef1e6c5'
  ];

  options ={
    navButtons: true,
    autoplay: false,
    autoplaySpeed: 3000,
    indicators: true,
    numberOfVisibleItems: 1,
    stepSize:1,
    spaceBetween:30,
    animation: 'ease-in-out',
    animationSpeed: '0.8s',
    rows: 1,
    height: '510px',
    galleryImages:[
      'https://doodleipsum.com/3000x2000/flat?bg=D98D63&i=4f0a73f37c3672bcf5c214b62b690ba4',
      'https://doodleipsum.com/3000x2000/flat?bg=825DEB&i=ab89dafe8593452edb4829000c2a2434',
      'https://doodleipsum.com/3000x2000/outline?bg=D96363&i=fcb5bd61f88331a7ada8b0de52dbc714',
      'https://doodleipsum.com/3000x2000?bg=6392D9&i=89a1695c883cfff8c9a7505eef663f80',
      'https://doodleipsum.com/3000x2000/flat?bg=D98D63&i=4f0a73f37c3672bcf5c214b62b690ba4',
      'https://doodleipsum.com/3000x2000/flat?bg=825DEB&i=ab89dafe8593452edb4829000c2a2434',
      'https://doodleipsum.com/3000x2000/outline?bg=D96363&i=fcb5bd61f88331a7ada8b0de52dbc714',
      'https://doodleipsum.com/3000x2000?bg=6392D9&i=89a1695c883cfff8c9a7505eef663f80',
      'https://doodleipsum.com/3000x2000/avatar?bg=63C8D9&i=c8b5c7c26bb63f70bcfc4e3a54f337a8',
      'https://doodleipsum.com/3000x2000/hand-drawn?bg=63C8D9&i=53f5643e46456031345f79c152ccef6e',
      'https://doodleipsum.com/3000x2000/hand-drawn?bg=63C8D9&i=11a3d171a97916c9ab34237c49fd3a8c',
      'https://doodleipsum.com/3000x2000/avatar?bg=63C8D9&i=0bdc1ecca366772a1c4b55232ef1e6c5'
    ]

  };


  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];`;
}
