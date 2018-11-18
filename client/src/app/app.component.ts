import { Component } from '@angular/core';
import { MetricDataService } from './services/metric-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  tabs = []

  constructor(private service:MetricDataService) { }

  ngOnInit() {
    this.service.getNames().subscribe(computerNames => {
      this.tabs = []
      for(var i = 0; i < computerNames.length; i++) {
        this.tabs.push(computerNames[i].nameOfMachine)
      }
    });
  }

}
