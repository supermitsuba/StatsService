import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { MachineName } from '../models/machine-name';
import { MetricType } from '../models/metric-type';
import { Metric } from '../models/metric';
import { LastHeartbeat } from '../models/last-heartbeat';

@Injectable({
  providedIn: 'root'
})
export class MetricDataService {
  baseUrl = ""

  constructor(private http: HttpClient) { }

  /// {baseUrl}/metrics?type=ip&name=LEDPI&limit=25
  getMetric(computerName, typeOfMetric, limit) {
    return this.http.get<Metric[]>(`${this.baseUrl}/metrics?type=${typeOfMetric}&name=${computerName}&limit=${limit}`)
  }

  /// {baseUrl}/metrics/types
  getTypes() {
    return this.http.get<MetricType[]>(`${this.baseUrl}/metrics/types`);
  }

  getLastTimestamp(computerName) {
    return this.http.get<LastHeartbeat[]>(`${this.baseUrl}/metrics/${computerName}/lastTimestamp`);
  }

  /// {baseUrl}/metrics/names
  getNames() {
    return this.http.get<MachineName[]>(`${this.baseUrl}/metrics/names`);
  }
}
