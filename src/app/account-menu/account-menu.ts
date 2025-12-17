import {Component, ViewChild} from '@angular/core';
import {MatMenu, MatMenuItem} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'account-menu',
  template: `
    <mat-menu #menu="matMenu">
      <button mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>Profile</span></button>
      <button mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>Settings</span></button>
      <button mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>Sign out</span></button>
    </mat-menu>
  `,
  styles  : ``,
  imports : [
    MatMenu,
    MatMenuItem,
    MatIcon
  ],

})
export class AccountMenu {
  @ViewChild('menu', {static: true}) matMenu!: MatMenu;
}
