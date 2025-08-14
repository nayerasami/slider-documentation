import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hearder',
  imports: [RouterModule],
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.css'
})
export class HearderComponent {
  constructor(public router: Router,@Inject(DOCUMENT) private document: Document,private renderer: Renderer2) { }
  isLightTheme = false;

  ngAfterViewInit() {
    console.log(this.document.body.classList, 'classlist in ngAfterViewInit');
  }
  toggleTheme() {
    console.log(this.document.body.classList, 'classlist');
    this.isLightTheme = !this.isLightTheme;

    if (this.isLightTheme) {
      this.renderer.addClass(this.document.body, 'light-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'light-theme');
    }
  }


}
