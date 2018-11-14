import { Component, OnInit } from '@angular/core';
import { MetricDataService } from '../services/metric-data-service.service';

@Component({
  selector: 'app-cpu-temp-charts',
  templateUrl: './cpu-temp-charts.component.html',
  styleUrls: ['./cpu-temp-charts.component.css']
})
export class CpuTempChartsComponent implements OnInit {

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
    var cpuTemp = this.service.getCPUTemp();
    var names = this.service.getNames();

    for(var i = cpuTemp.length-1; i >= 0; i--) {
      var item = cpuTemp[i]
      this.chartLabels.push(item.createdTimestamp)
      var cTemp = item.value.split("/")[0];
      var fTemp = item.value.split("/")[1];
      tempData.push(cTemp.substring(0, cTemp.length-2))
    }

    this.chartData.push({ data:tempData, label:names[0].nameOfMachine})
  }

  onChartClick(event) {
    console.log(event);
  }
}
