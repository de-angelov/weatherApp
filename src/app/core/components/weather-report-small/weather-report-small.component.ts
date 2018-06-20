import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-report-small',
  templateUrl: './weather-report-small.component.html',
  styleUrls: ['./weather-report-small.component.css']
})
export class WeatherReportSmallComponent implements OnInit {

  @Input()
  private reportData;

  constructor() { }

  ngOnInit() {
  }

}
