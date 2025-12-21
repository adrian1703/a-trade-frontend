import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  template: `

    <mat-sidenav-container class="home-container">
      <mat-sidenav #drawer class="
      sidenav
"
                   [fixedInViewport]="false"
                   [fixedTopGap]="0"
                   [fixedBottomGap]="0"
                   [attr.role]="'navigation'"
                   [mode]="'side'"
                   [opened]="true"

      >
        <mat-nav-list class="
        nav-list
      mat-bg-surface-container
      mat-shadow-1
      mat-border
">
          @for (link of links; track link) {
            <a
              class="link-list-item"
              mat-list-item
              [routerLink]="link.routerLink">
              <mat-icon>{{ link.icon }}</mat-icon>
              <span>{{ link.label }}</span>
            </a>
          }
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>

    </mat-sidenav-container>

  `,
  styles  : `

    .nav-list {
      margin-top: 1rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      border-left: none;

    }

    .home-container {
      height: 100%;
      box-sizing: border-box;
    }

    .link-list-item * {
      align-items: center;
      vertical-align: middle;
    }

    .mat-icon {
      font-size: 19px;
    }

    .sidenav {
      width: 170px;
    }

    .sidenav .mat-toolbar {
      background: inherit;
    }

    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
      z-index: 1;
    }

  `,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,


  ]
})
export class HomeComponent {
  links = [
    {label: 'Home', icon: 'home', routerLink: ''},
    {label: 'Dashboard', icon: 'dashboard', routerLink: 'dashboard'},
    {label: 'Settings', icon: 'settings', routerLink: ''},
    {label: 'Buttons', icon: 'code', routerLink: 'button'},
  ];
}
