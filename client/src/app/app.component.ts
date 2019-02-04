import { Component, ViewChildren, QueryList } from '@angular/core';
import { MetricDataService } from './services/metric-data-service.service';
import { MatTabChangeEvent } from '@angular/material';
import { VmChartComponent } from './vm-chart/vm-chart.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  tabs = []

  @ViewChildren(VmChartComponent) private _childrenCharts: QueryList<VmChartComponent>;

  constructor(private service:MetricDataService) { }

  ngOnInit() {
    this.service.getNames().subscribe(computerNames => {
      this.tabs = []
      for(var i = 0; i < computerNames.length; i++) {
        this.tabs.push(computerNames[i].nameOfMachine)
      }

      this.refreshChart(0);
    });
  }

  onLinkClick(event: MatTabChangeEvent) {
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab);

    this.refreshChart(event.index);
  }

  refreshChart(index) {
    var chart:VmChartComponent = this._childrenCharts.toArray()[index] //_results[index]
    chart.getMetrics();
  }

}
