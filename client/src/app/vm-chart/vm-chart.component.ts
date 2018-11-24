import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MetricDataService } from '../services/metric-data-service.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-vm-chart',
  templateUrl: './vm-chart.component.html',
  styleUrls: ['./vm-chart.component.css']
})

export class VmChartComponent implements OnInit {
  @Input() name = "blank"
  @ViewChild("tempChart") tempChart: BaseChartDirective;
  @ViewChild("processChart") processChart: BaseChartDirective;
  @ViewChild("cpuChart") cpuChart: BaseChartDirective;
  @ViewChild("memoryChart") memoryChart: BaseChartDirective;

  cpuData = []
  cpuLabel = []

  cpuTempData = []
  cpuTempLabel = [ ]

  memoryData = [ ]
  memoryLabel = [ ]

  numOfProcessData = [ ]
  numOfProcessLabel = [ ]

  ip = "unavailable"
  uptime = "unavailable"
  version = "unavailable"
  lastTimestamp = "unavailable"

  chartOptions = {
    responsive: true
  };

  constructor(private service:MetricDataService) {
  }

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

    this.service.getLastTimestamp(this.name).subscribe(metric => {
      this.lastTimestamp = metric != null && metric.length > 0 ? metric[0].max : "unavailable"
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
        this.cpuLabel.push(item.createdTimestamp.toString())
        tempData.push(item.value.substring(0, item.value.length-1))
      }

      this.cpuData.push({ data:tempData, label:this.name})
      if(this.cpuChart !== undefined){
        this.cpuChart.ngOnDestroy();
        this.cpuChart.chart = this.cpuChart.getChartBuilder(this.cpuChart.ctx);
      }
    });
  }

  getProcesses() {
    this.service.getMetric(this.name, 'Number of Processes', '25').subscribe(metric => {
      var tempData = [];

      for(var i = metric.length-1; i >= 0; i--) {
        var item = metric[i]
        this.numOfProcessLabel.push(item.createdTimestamp.toString())
        tempData.push(item.value)
      }

      this.numOfProcessData.push({ data:tempData, label:this.name})
      if(this.processChart !== undefined){
        this.processChart.ngOnDestroy();
        this.processChart.chart = this.processChart.getChartBuilder(this.processChart.ctx);
      }
    });
  }

  getCPUTemp() {
    this.service.getMetric(this.name, 'CPU Temperature', '25').subscribe(cpuMetric =>{
      this.service.getMetric(this.name, 'GPU Temperature', '25').subscribe(gpuMetric => {
        var tempData = [];
        var tempGPUData = [];

        if(cpuMetric.length < 1) return;

        for(var i = cpuMetric.length-1; i >= 0; i--) {
          var item = cpuMetric[i]
          this.cpuTempLabel.push(item.createdTimestamp.toString())
          var cTemp = item.value.split("/")[0];
          var fTemp = item.value.split("/")[1];
          tempData.push(cTemp.substring(0, cTemp.length-2))
        }
        this.cpuTempData.push({ data:tempData, label:'CPU Temp'})

        if(gpuMetric.length < 1) return;

        for(var i = gpuMetric.length-1; i >= 0; i--) {
          var item = gpuMetric[i]
          var cTemp = item.value.split("/")[0];
          var fTemp = item.value.split("/")[1];
          tempGPUData.push(cTemp.substring(0, cTemp.length-2))
        }

        this.cpuTempData.push({ data:tempGPUData, label:'GPU Temp'})
        if(this.tempChart !== undefined){
          this.tempChart.ngOnDestroy();
          this.tempChart.chart = this.tempChart.getChartBuilder(this.tempChart.ctx);
        }
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
          this.memoryLabel.push(itemTotal.createdTimestamp.toString())
          tempTotal.push(itemTotal.value.substring(0, itemTotal.value.length-3))
        }

        for(var i = freeMetric.length-1; i >= 0; i--) {
          var itemTotal = freeMetric[i]
          tempUsed.push(itemTotal.value.substring(0, itemTotal.value.length-3))
        }

        this.memoryData.push({ data:tempTotal, label:'Memory Total'})
        this.memoryData.push({ data:tempUsed, label:'Memory Used'})
        if(this.memoryChart !== undefined){
          this.memoryChart.ngOnDestroy();
          this.memoryChart.chart = this.memoryChart.getChartBuilder(this.memoryChart.ctx);
        }
      });
    });
  }


  onChartClick(event) {
    console.log(event);
  }
}
