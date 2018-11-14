import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetricDataService {

  constructor() { }

  getCPUUsage() {
    var rawData= [
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

    return rawData;
  }

  getCPUTemp() {
    var rawData= [
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
    return rawData;
  }

  getTypes() {

    var types= [
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
    return types;
  }

  getNames() {

    var name= [
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
    return name;
  }
}
