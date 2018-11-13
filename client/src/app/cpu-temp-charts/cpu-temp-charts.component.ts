import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpu-temp-charts',
  templateUrl: './cpu-temp-charts.component.html',
  styleUrls: ['./cpu-temp-charts.component.css']
})
export class CpuTempChartsComponent implements OnInit {

  chartOptions = {
    responsive: true
  };

  rawData= [
    {
      "id": 94837,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T21:10:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T02:10:01.000Z"
    },
    {
      "id": 94791,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T21:00:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T02:00:01.000Z"
    },
    {
      "id": 94738,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T20:50:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T01:50:01.000Z"
    },
    {
      "id": 94688,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T20:40:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T01:40:01.000Z"
    },
    {
      "id": 94639,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T20:30:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T01:30:01.000Z"
    },
    {
      "id": 94591,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T20:20:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T01:20:01.000Z"
    },
    {
      "id": 94538,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T20:10:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T01:10:01.000Z"
    },
    {
      "id": 94483,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T20:00:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T01:00:01.000Z"
    },
    {
      "id": 94431,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T19:50:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T00:50:01.000Z"
    },
    {
      "id": 94379,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T19:40:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T00:40:01.000Z"
    },
    {
      "id": 94339,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T19:30:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T00:30:02.000Z"
    },
    {
      "id": 94289,
      "value": "47°C/116°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T19:20:02.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T00:20:02.000Z"
    },
    {
      "id": 94238,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T19:10:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T00:10:02.000Z"
    },
    {
      "id": 94184,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T19:00:02.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-13T00:00:02.000Z"
    },
    {
      "id": 94130,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T18:50:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T23:50:01.000Z"
    },
    {
      "id": 94083,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T18:40:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T23:40:01.000Z"
    },
    {
      "id": 94031,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T18:30:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T23:30:01.000Z"
    },
    {
      "id": 93980,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T18:20:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T23:20:01.000Z"
    },
    {
      "id": 93934,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T18:10:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T23:10:02.000Z"
    },
    {
      "id": 93874,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T18:00:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T23:00:01.000Z"
    },
    {
      "id": 93830,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T17:50:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T22:50:02.000Z"
    },
    {
      "id": 93781,
      "value": "46°C/114°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T17:40:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T22:40:02.000Z"
    },
    {
      "id": 93732,
      "value": "45°C/113°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T17:30:02.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T22:30:02.000Z"
    },
    {
      "id": 93673,
      "value": "45°C/113°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T17:20:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T22:20:01.000Z"
    },
    {
      "id": 93623,
      "value": "45°C/113°F",
      "type": "CPU Temperature",
      "dateOfOccurance": "2018-11-12T17:10:01.000Z",
      "nameOfMachine": "LEDPI",
      "createdTimestamp": "2018-11-12T22:10:01.000Z"
    }
  ]

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
      var cTemp = item.value.split("/")[0];
      var fTemp = item.value.split("/")[1];
      tempData.push(cTemp.substring(0, cTemp.length-2))
    }

    this.chartData.push({ data:tempData, label:this.name[1].nameOfMachine})
  }

  onChartClick(event) {
    console.log(event);
  }
}
