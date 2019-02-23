import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MetricDataService } from '../services/metric-data-service.service';
import { BaseChartDirective } from 'ng2-charts';
import * as moment from '../../../node_modules/moment/min/moment-with-locales';

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
  @ViewChild("diskChart") diskChart: BaseChartDirective;

  isChartData = false;

  cpuData = [{ data:[], label:"" }]
  cpuLabel = []

  cpuTempData = [{ data:[], label:"" },{ data:[], label:"" }]
  cpuTempLabel = [ ]

  memoryData = [{ data:[], label:"" },{ data:[], label:"" }]
  memoryLabel = [ ]

  diskData = [{ data:[], label:"" },{ data:[], label:"" }]
  diskLabel = [ ]

  numOfProcessData = [{ data:[], label:"" }]
  numOfProcessLabel = [ ]

  ip = "unavailable"
  uptime = "unavailable"
  version = "unavailable"
  lastTimestamp = "unavailable"

  chartOptions = {
    responsive: false,
    scales: {
      yAxes: [{
          ticks: {
            min: 0
          }
      }]
    }
  }

  cpuOptions = {
    responsive: false,
    scales: {
      yAxes: [{
          ticks: {
            steps : 10,
            stepValue : 10,
            max : 100,
            min: 0
          }
      }]
    }
  }

  constructor(private service:MetricDataService) {
  }

  ngOnInit() {
    this.isChartData = false
  }

  getMetrics() {
    this.clearCharts();
    this.service.getMetric(this.name, 'IP', '25').subscribe(metric => {
      this.ip = metric != null && metric.length > 0 ? metric[0].value : "unavailable"
    });

    this.service.getMetric(this.name, 'uptime', '25').subscribe(metric => {
      this.uptime = metric != null && metric.length > 0 ? metric[0].value : "unavailable"
    });

    this.service.getMetric(this.name, 'LinuxVersion', '25').subscribe(metric => {
      this.version = metric != null && metric.length > 0 ? metric[0].value : "unavailable"
    });

    this.service.getLastTimestamp(this.name).subscribe(metric => {
      this.lastTimestamp = metric != null && metric.length > 0 ? this.convertDateTime(metric[0].max) : "unavailable"
    });

    this.getCPU()
    this.getCPUTemp()
    this.getMemory()
    this.getProcesses()
    this.getDisk()
    this.isChartData = true;
  }

  clearCharts() {
    this.cpuData = [{ data:[], label:"" }]
    this.cpuLabel.length = 0

    this.cpuTempData = [{ data:[], label:"" },{ data:[], label:"" }]
    this.cpuTempLabel.length = 0

    this.memoryData = [{ data:[], label:"" },{ data:[], label:"" }]
    this.memoryLabel.length = 0

    this.diskData = [{ data:[], label:"" },{ data:[], label:"" }]
    this.diskLabel.length = 0

    this.numOfProcessData = [{ data:[], label:"" }]
    this.numOfProcessLabel.length = 0
  }

  getCPU() {
    this.service.getMetric(this.name, 'CPU', '25').subscribe(metric => {
      var tempData = [];

      for(var i = metric.length-1; i >= 0; i--) {
        var item = metric[i]
        this.cpuLabel.push(this.convertDateTime(item.createdTimestamp))
        tempData.push(item.value.substring(0, item.value.length-1))
      }

      this.cpuData = [{ data:tempData, label:this.name}]
    });
  }

  getProcesses() {
    this.service.getMetric(this.name, 'Number of Processes', '25').subscribe(metric => {
      var tempData = [];

      for(var i = metric.length-1; i >= 0; i--) {
        var item = metric[i]
        this.numOfProcessLabel.push(this.convertDateTime(item.createdTimestamp))
        tempData.push(item.value)
      }

      this.numOfProcessData = [{ data:tempData, label:this.name}]
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
          this.cpuTempLabel.push(this.convertDateTime(item.createdTimestamp))
          var cTemp = item.value.split("/")[0];
          var fTemp = item.value.split("/")[1];
          tempData.push(cTemp.substring(0, cTemp.length-2))
        }

        if(gpuMetric.length < 1) return;

        for(var i = gpuMetric.length-1; i >= 0; i--) {
          var item = gpuMetric[i]
          var cTemp = item.value.split("/")[0];
          var fTemp = item.value.split("/")[1];
          tempGPUData.push(cTemp.substring(0, cTemp.length-2))
        }

        this.cpuTempData = [{ data:tempData, label:'CPU Temp'},{ data:tempGPUData, label:'GPU Temp'}]
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
          this.memoryLabel.push(this.convertDateTime(itemTotal.createdTimestamp))
          tempTotal.push(itemTotal.value.substring(0, itemTotal.value.length-3))
        }

        for(var i = freeMetric.length-1; i >= 0; i--) {
          var itemTotal = freeMetric[i]
          tempUsed.push(itemTotal.value.substring(0, itemTotal.value.length-3))
        }

        this.memoryData = [{ data:tempTotal, label:'Memory Total'}, { data:tempUsed, label:'Memory Available'}]

      });
    });
  }

  getDisk() {
    this.service.getMetric(this.name, 'disk_used', 25).subscribe(usedMetric => {
      this.service.getMetric(this.name, 'disk_available', 25).subscribe(availableMetric => {
        var tempAvailable = [];
        var tempUsed = [];

        for(var i = availableMetric.length-1; i >= 0; i--) {
          var itemTotal = availableMetric[i]
          this.diskLabel.push(this.convertDateTime(itemTotal.createdTimestamp))
          tempAvailable.push(itemTotal.value.substring(0, itemTotal.value.length-3))
        }

        for(var i = usedMetric.length-1; i >= 0; i--) {
          var itemTotal = usedMetric[i]
          tempUsed.push(itemTotal.value.substring(0, itemTotal.value.length-3))
        }

        this.diskData = [{ data:tempAvailable, label:'Disk Available'}, { data:tempUsed, label:'Disk Used'}]
      });
    });
  }

  convertDateTime(value) {
    //.add((new Date().getTimezoneOffset()/60), 'hours')
    return moment(value).format('lll');
  }

  onChartClick(event) {
    console.log(event);
  }
}
