import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Route, RouterOutlet } from '@angular/router';
import { HearderComponent } from "./components/hearder/hearder.component";
import { CommonModule, Location } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HearderComponent, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'Sleek Slider';
  constructor(public route: ActivatedRoute, private location: Location) { }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        this.location.replaceState('/');
        const element = document.getElementById('banner-section');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    })
  }


}
