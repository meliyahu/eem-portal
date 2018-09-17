import { NotFoundComponent } from './eem-components/not-found/not-found.component';
import { AboutComponent } from './eem-components/about/about.component';
import { DataChartsComponent } from './eem-components/data-charts/data-charts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './eem-components/home/home.component';
import { RawDataComponent } from './eem-components/raw-data/raw-data.component';
import { ApiDocComponent } from './eem-components/api-doc/api-doc.component';

const routes: Routes = [
  { 'path': '', component: HomeComponent },
  { 'path': 'raw-data', component: RawDataComponent },
  { 'path': 'data-charts', component: DataChartsComponent },
  { 'path': 'api', component: ApiDocComponent },
  { 'path': 'about', component: AboutComponent },
  { 'path': '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, RawDataComponent, DataChartsComponent, ApiDocComponent, AboutComponent, NotFoundComponent];
