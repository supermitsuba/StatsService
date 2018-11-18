import { Component, OnInit, Input } from '@angular/core';
import { MetricDataService } from '../services/metric-data-service.service';

@Component({
  selector: 'app-vm-chart',
  templateUrl: './vm-chart.component.html',
  styleUrls: ['./vm-chart.component.css']
})

export class VmChartComponent implements OnInit {
  @Input() name = "blank"

  cpuData = []
  cpuLabel = []

  cpuTempData = []
  cpuTempLabel = []

  memoryData = []
  memoryLabel = []

  numOfProcessData = []
  numOfProcessLabel = []

  ip = "unavailable"
  uptime = "unavailable"
  version = "unavailable"

  chartOptions = {
    responsive: true
  };

  constructor(private service:MetricDataService) { }

  ngOnInit() {
    this.service.getMetric(this.name, 'IP', '25').subscribe(metric => {
      this.ip = metric != null && metric.length > 0 ? metric[metric.length-1].value : "unavailable"
    });

    this.service.getMetric(this.name, 'uptime', '25').subscribe(metric => {
      this.uptime = metric != null && metric.length > 0 ? metric[metric.length-1].value : "unavailable"
    });

    this.service.getMetric(this.name, 'LinuxVersion', '25').subscribe(metric => {
      this.version = metric != null && metric.length > 0 ? metric[metric.length-1].value : "unavailable"
    });

    this.getCPU()
    this.getCPUTemp()
    this.getMemory()
    this.getProcesses()
  }

  getCPU() {
    this.service.getMetric(this.name, 'CPU', '25').subscribe(metric => {
      var tempData = [];

      for(var i = metric.length-1; i >= 0; i--) {
        var item = metric[i]
        this.cpuLabel.push(item.createdTimestamp)
        tempData.push(item.value.substring(0, item.value.length-1))
      }

      this.cpuData.push({ data:tempData, label:this.name})
    });
  }

  getProcesses() {
    this.service.getMetric(this.name, 'Number of Processes', '25').subscribe(metric => {
      var tempData = [];

      for(var i = metric.length-1; i >= 0; i--) {
        var item = metric[i]
        this.numOfProcessLabel.push(item.createdTimestamp)
        tempData.push(item.value)
      }

      this.numOfProcessData.push({ data:tempData, label:this.name})
    });
  }

  getCPUTemp() {
    this.service.getMetric(this.name, 'CPU Temperature', '25').subscribe(cpuMetric =>{
      this.service.getMetric(this.name, 'GPU Temperature', '25').subscribe(gpuMetric => {
        var tempData = [];
        var tempGPUData = [];

        for(var i = cpuMetric.length-1; i >= 0; i--) {
          var item = cpuMetric[i]
          this.cpuTempLabel.push(item.createdTimestamp)
          var cTemp = item.value.split("/")[0];
          var fTemp = item.value.split("/")[1];
          tempData.push(cTemp.substring(0, cTemp.length-2))
        }

        for(var i = gpuMetric.length-1; i >= 0; i--) {
          var item = gpuMetric[i]
          var cTemp = item.value.split("/")[0];
          var fTemp = item.value.split("/")[1];
          tempGPUData.push(cTemp.substring(0, cTemp.length-2))
        }

        this.cpuTempData.push({ data:tempData, label:'CPU Temp'})
        this.cpuTempData.push({ data:tempGPUData, label:'GPU Temp'})
      });
    });
  }

  getMemory() {
    this.service.getMetric(this.name, 'memTotal', 25).subscribe(totalMetric => {
      this.service.getMetric(this.name, 'memFree', 25).subscribe(freeMetric => {
        var tempTotal = [];
        var tempUsed = [];

        for(var i = totalMetric.length-1; i >= 0; i--) {
          var itemTotal = totalMetric[i]
          this.memoryLabel.push(itemTotal.createdTimestamp)
          tempTotal.push(itemTotal.value.substring(0, itemTotal.value.length-3))
        }

        for(var i = freeMetric.length-1; i >= 0; i--) {
          var itemTotal = freeMetric[i]
          tempUsed.push(itemTotal.value.substring(0, itemTotal.value.length-3))
        }

        this.memoryData.push({ data:tempTotal, label:'Memory Total'})
        this.memoryData.push({ data:tempUsed, label:'Memory Used'})
      });
    });
  }


  onChartClick(event) {
    console.log(event);
  }
}
