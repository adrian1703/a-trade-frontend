import {Component, ViewChild} from '@angular/core';
import {MatMenu, MatMenuItem} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'account-menu',
  template: `
    <mat-menu #menu="matMenu">
      @for (btnCfg of buttonConfig; track $index; ) {
        <button mat-menu-item class="menu-button">
          <mat-icon>{{ btnCfg.icon }}</mat-icon>
          <span>{{ btnCfg.label }}</span>
        </button>
      }
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


  buttonConfig = [
    {icon: 'account_circle', label: 'Profile'},
    {icon: 'settings', label: 'Settings'},
    {icon: 'exit_to_app', label: 'Sign out'}
  ]
}
