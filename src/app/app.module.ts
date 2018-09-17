import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './eem-components/home/home.component';
// import { RawDataComponent } from './eem-components/raw-data/raw-data.component';
// import { DataChartsComponent } from './eem-components/data-charts/data-charts.component';
// import { ApiDocComponent } from './eem-components/api-doc/api-doc.component';
// import { AboutComponent } from './eem-components/about/about.component';
import { OrganismComponent } from './eem-components/raw-data/organism/organism.component';
import { SamplingunitComponent } from './eem-components/raw-data/samplingunit/samplingunit.component';
// import { NotFoundComponent } from './eem-components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OrganismComponent,
    SamplingunitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
