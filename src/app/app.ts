import {Component, signal} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Topbar} from './topbar/topbar';

@Component({
  selector: 'app-root',
  imports : [
    // RouterOutlet,
    MatSlideToggleModule,
    Topbar,
  ],
  template: `
    <app-topbar [title]="title"/>
    <h1 class="mat-text-primary">{{ title() }}</h1>
    <div class="main">
      <mat-slide-toggle>Toggle me!</mat-slide-toggle>
    </div>
  `
})
export class App {
  protected readonly title = signal('A-Trade');
}
