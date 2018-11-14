import { Component, OnInit } from '@angular/core';
import { MetricDataService } from '../services/metric-data-service.service';

@Component({
  selector: 'app-cpu-charts',
  templateUrl: './cpu-charts.component.html',
  styleUrls: ['./cpu-charts.component.css']
})
export class CpuChartsComponent implements OnInit {

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor(private service:MetricDataService) { }

  ngOnInit() {
    this.chartLabels = [];
    this.chartData = [];
    var tempData = [];
    var cpu = this.service.getCPUUsage();
    var names = this.service.getNames();

    for(var i = cpu.length-1; i >= 0; i--) {
      var item = cpu[i]
      this.chartLabels.push(item.createdTimestamp)
      tempData.push(item.value.substring(0, item.value.length-1))
    }

    this.chartData.push({ data:tempData, label:names[0].nameOfMachine})
  }

  onChartClick(event) {
    console.log(event);
  }
}
