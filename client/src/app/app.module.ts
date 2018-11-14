import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CpuChartsComponent } from './cpu-charts/cpu-charts.component';
import { MemoryChartsComponent } from './memory-charts/memory-charts.component';
import { CpuTempChartsComponent } from './cpu-temp-charts/cpu-temp-charts.component';
import { VmChartComponent } from './vm-chart/vm-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CpuChartsComponent,
    MemoryChartsComponent,
    CpuTempChartsComponent,
    VmChartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
