import {Component, inject} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {DashboardComponent} from '../dashboard/dashboard.component';

@Component({
  selector: 'app-sidebar',
  template: `

    <mat-sidenav-container class="sidenav-container">
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
        <!--                   [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"-->
        <!--                   [mode]="(isHeandset$ | async) ? 'side' : 'side'"-->
        <!--                   [opened]="(isHandset$ | async) === false"-->
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
              [href]="link.href">
              <mat-icon>{{ link.icon }}</mat-icon>
              <span>{{ link.label }}</span>
            </a>
          }
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-dashboard></app-dashboard>
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
    .sidenav-container {
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
    DashboardComponent,


  ]
})
export class SidebarComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
                                        .pipe(
                                          map(result => result.matches),
                                          shareReplay()
                                        );
  links = [
    {label: 'Home', icon: 'home', href: '#'},
    {label: 'Dashboard', icon: 'dashboard', href: '#'},
    {label: 'Settings', icon: 'settings', href: '#'}
  ];
}
