import {Component, signal} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Topbar} from './topbar/topbar';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports : [
    // RouterOutlet,
    MatSlideToggleModule,
    Topbar,
    SidebarComponent,
    MatToolbar,
  ],
  template: `
    <div class="app">
      <app-topbar class="example-header" [title]="title"/>
      <app-sidebar class="main"/>
      <mat-toolbar class="example-footer">
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

    .example-header {
      flex: 0 0 auto;
    }

    .main {
      flex: 1 0 auto;
    }

    .example-footer {
      background: var(--mat-sys-primary-container);
      flex: 0 0 auto;
      margin-top: 15px;
    }
  `
})
export class App {
  protected readonly title = signal('A-Trade');
}
