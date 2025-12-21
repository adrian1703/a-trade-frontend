import {Component, signal} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Topbar} from './topbar/topbar';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    Topbar,
    MatToolbar,
  ],
  template: `
    <div class="app">
      <app-topbar class="header" [title]="title"/>
      <div class="main">
        <router-outlet/>
      </div>
      <mat-toolbar class="footer">
        <h1 class="mat-text-primary">{{ title() }}</h1>
        <mat-slide-toggle>Toggle me!</mat-slide-toggle>
      </mat-toolbar>
    </div>
  `,
  styles  : `
    .app {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    .header {
      flex: 0 0 auto;
    }

    .main {
      flex: 1 1 auto;
      min-height: 0;
    }

    .footer {
      background: var(--mat-sys-primary-container);
      flex: 0 0 auto;
    }
  `
})
export class App {
  protected readonly title = signal('A-Trade');
}
