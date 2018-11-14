import { Component, OnInit } from '@angular/core';
import { MetricDataService } from '../services/metric-data-service.service';

@Component({
  selector: 'app-vm-chart',
  templateUrl: './vm-chart.component.html',
  styleUrls: ['./vm-chart.component.css']
})



export class VmChartComponent implements OnInit {
  cpuData = []
  cpuLabel = []
  cpuTempData = []
  cpuTempLabel = []

  chartOptions = {
    responsive: true
  };

  constructor(private service:MetricDataService) { }

  ngOnInit() {
    this.getCPU()
    this.getCPUTemp()
  }

  getCPU() {
    var cpu = this.service.getCPUUsage();
    var names = this.service.getNames();
    var tempData = [];

    for(var i = cpu.length-1; i >= 0; i--) {
      var item = cpu[i]
      this.cpuLabel.push(item.createdTimestamp)
      tempData.push(item.value.substring(0, item.value.length-1))
    }

    this.cpuData.push({ data:tempData, label:names[0].nameOfMachine})
  }

  getCPUTemp() {
    var cpu = this.service.getCPUTemp();
    var names = this.service.getNames();
    var tempData = [];

    for(var i = cpu.length-1; i >= 0; i--) {
      var item = cpu[i]
      this.cpuTempLabel.push(item.createdTimestamp)
      var cTemp = item.value.split("/")[0];
      var fTemp = item.value.split("/")[1];
      tempData.push(cTemp.substring(0, cTemp.length-2))
    }

    this.cpuTempData.push({ data:tempData, label:names[0].nameOfMachine})
  }

  onChartClick(event) {
    console.log(event);
  }
}
