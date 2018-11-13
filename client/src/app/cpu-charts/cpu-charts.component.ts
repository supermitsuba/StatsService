import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpu-charts',
  templateUrl: './cpu-charts.component.html',
  styleUrls: ['./cpu-charts.component.css']
})
export class CpuChartsComponent implements OnInit {

  chartOptions = {
    responsive: true
  };

  rawData= [
    {
      "id": 94713,
      "value": "0.630889%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:44:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:44:01.000Z"
    },
    {
      "id": 94698,
      "value": "0.630922%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:42:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:42:01.000Z"
    },
    {
      "id": 94684,
      "value": "0.630965%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:40:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:40:01.000Z"
    },
    {
      "id": 94674,
      "value": "0.631006%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:38:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:38:01.000Z"
    },
    {
      "id": 94667,
      "value": "0.631061%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:36:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:36:01.000Z"
    },
    {
      "id": 94657,
      "value": "0.631112%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:34:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:34:01.000Z"
    },
    {
      "id": 94649,
      "value": "0.631159%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:32:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:32:01.000Z"
    },
    {
      "id": 94636,
      "value": "0.631205%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:30:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:30:01.000Z"
    },
    {
      "id": 94625,
      "value": "0.631253%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:28:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:28:01.000Z"
    },
    {
      "id": 94617,
      "value": "0.631303%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:26:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:26:01.000Z"
    },
    {
      "id": 94607,
      "value": "0.631352%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:24:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:24:01.000Z"
    },
    {
      "id": 94598,
      "value": "0.631405%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:22:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:22:01.000Z"
    },
    {
      "id": 94587,
      "value": "0.631455%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:20:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:20:01.000Z"
    },
    {
      "id": 94577,
      "value": "0.631508%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:18:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:18:01.000Z"
    },
    {
      "id": 94572,
      "value": "0.631563%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:16:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:16:01.000Z"
    },
    {
      "id": 94560,
      "value": "0.631617%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:14:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:14:01.000Z"
    },
    {
      "id": 94550,
      "value": "0.631663%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:12:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:12:01.000Z"
    },
    {
      "id": 94541,
      "value": "0.631717%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:10:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:10:01.000Z"
    },
    {
      "id": 94527,
      "value": "0.631768%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:08:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:08:01.000Z"
    },
    {
      "id": 94519,
      "value": "0.631821%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:06:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:06:01.000Z"
    },
    {
      "id": 94512,
      "value": "0.631879%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:04:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:04:01.000Z"
    },
    {
      "id": 94500,
      "value": "0.631936%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:02:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:02:01.000Z"
    },
    {
      "id": 94479,
      "value": "0.631881%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T01:00:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T01:00:01.000Z"
    },
    {
      "id": 94469,
      "value": "0.631938%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T00:58:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T00:58:01.000Z"
    },
    {
      "id": 94461,
      "value": "0.631995%",
      "type": "CPU",
      "dateOfOccurance": "2018-11-13T00:56:01.000Z",
      "nameOfMachine": "VPN",
      "createdTimestamp": "2018-11-13T00:56:01.000Z"
    }
  ];

  types= [
    {
      "type": "memFree"
    },
    {
      "type": "CPU"
    },
    {
      "type": "memTotal"
    },
    {
      "type": "CPU Temperature"
    },
    {
      "type": "Number of Processes"
    },
    {
      "type": "GPU Temperature"
    },
    {
      "type": "uptime"
    },
    {
      "type": "IP"
    },
    {
      "type": "LinuxVersion"
    }
  ];

  name= [
    {
      "nameOfMachine": "DNS"
    },
    {
      "nameOfMachine": "VPN"
    },
    {
      "nameOfMachine": "LEDPI"
    },
    {
      "nameOfMachine": "RETROPIE"
    }
  ];

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor() { }

  ngOnInit() {
    this.chartLabels = [];
    this.chartData = [];
    var tempData = [];

    for(var i = this.rawData.length-1; i >= 0; i--) {
      var item = this.rawData[i]
      this.chartLabels.push(item.createdTimestamp)
      tempData.push(item.value.substring(0, item.value.length-1))
    }

    this.chartData.push({ data:tempData, label:this.name[0].nameOfMachine})
  }

  onChartClick(event) {
    console.log(event);
  }
}
