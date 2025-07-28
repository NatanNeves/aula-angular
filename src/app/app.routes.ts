import { Routes } from '@angular/router';
import { CarroslistComponent } from './components/carroslist/carroslist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboards', pathMatch: 'full'},
    {path: 'dashboards', component: DashboardComponent},
    {path: 'carros', component: CarroslistComponent}
];
