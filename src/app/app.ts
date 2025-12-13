import {Component, signal} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports : [
    // RouterOutlet,
    MatSlideToggleModule,
  ],
  template: `
    <h1 class="mat-text-primary">{{ title() }}</h1>
    <div class="main">
      <mat-slide-toggle>Toggle me!</mat-slide-toggle>
    </div>
  `
})
export class App {
  protected readonly title = signal('A-Trade');
}
