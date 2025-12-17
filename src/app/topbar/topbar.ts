import {Component, Input, Signal} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {MatMenuTrigger} from '@angular/material/menu';
import {AccountMenu} from '../account-menu/account-menu';

@Component({
  selector: 'app-topbar',
  imports: [
    MatButton,
    MatIcon,
    MatToolbar,
    MatIconButton,
    MatMenuTrigger,
    AccountMenu
  ],
  template: `
    <mat-toolbar class="mat-bg-secondary-container">
      <a matButton href="#">
        <mat-icon>home</mat-icon>
        <span>{{ title() }}</span>
      </a>
      <div class="padding"></div>
      <button matIconButton>
        <mat-icon>search</mat-icon>
      </button>
      <button matButton [mat-menu-trigger-for]="accountMenu.matMenu">
        <mat-icon>account_circle</mat-icon>
        <span>Account</span>
      </button>
      <account-menu #accountMenu></account-menu>
    </mat-toolbar>

  `,
  styles  : `
    mat-icon {
      color: var(--mat-sys-primary);
    }
    span {
      color: var(--mat-sys-primary);
    }
    .padding {
      margin: auto;
    }
  `

})
export class Topbar {
  @Input({required: true}) title!: Signal<String>
}
