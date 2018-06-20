import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  @Input()
  private reportData;

  constructor() { }

  ngOnInit() {
  }

}
