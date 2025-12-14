import {Component, Input, Signal} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-topbar',
  imports: [
    MatButton,
    MatIcon,
    MatToolbar,
    MatIconButton
  ],
  template: `
    <mat-toolbar class="mat-bg-secondary-container mat-text-primary">
      <a matButton href="#">
        <mat-icon>home</mat-icon>
        <span>{{ title() }}</span>
      </a>
      <div class="padding"></div>
      <button matIconButton>
        <mat-icon>search</mat-icon>
      </button>
      <a matButton href="#">
        <mat-icon>account_circle</mat-icon>
        <span>Account</span>
      </a>
    </mat-toolbar>

  `,
  styles  : `
    mat-icon {
      color: var(--mat-sys-primary);
    }

    span {
      color: var(--mat-sys-primary);
    }

    .topbar-header {
      height: 8%;
      display: flex;
      align-items: center;
    }

    .topbar-left {
    }

    .padding {
      margin: auto;
    }
  `

})
export class Topbar {
  @Input({required: true}) title!: Signal<String>
}
