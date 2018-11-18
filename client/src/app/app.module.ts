import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { VmChartComponent } from './vm-chart/vm-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    VmChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
