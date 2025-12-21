import {Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ButtonsPage} from '../buttons/buttons-page/buttons-page';

export const homeComponentRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'button', component: ButtonsPage},
];
