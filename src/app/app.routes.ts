import { Routes } from '@angular/router';
import { DemosComponent } from './components/demos/demos.component';
import { SleekIntroComponent } from './components/sleek-intro/sleek-intro.component';
import { DocsComponent } from './components/docs/docs.component';
import { GettingStartComponent } from './components/docs/getting-start/getting-start.component';
import { ApiComponent } from './components/docs/api/api.component';
import { ExamplesComponent } from './components/docs/examples/examples.component';

export const routes: Routes = [
  { path: '', component: SleekIntroComponent, pathMatch: 'full' },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: '', redirectTo: 'getting-start', pathMatch: 'full' }, 
      { path: 'getting-start', component: GettingStartComponent },
      { path: 'api', component: ApiComponent },
      { path: 'examples', component: ExamplesComponent },
    ],
  },
];
