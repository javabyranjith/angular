import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartDataModel } from './model/chart.data.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  chartData: Observable<ChartDataModel>;

  constructor(private http: HttpClient){
      this.chartData = this.http.get<ChartDataModel>('./assets/chart.data.json')
  }

}
