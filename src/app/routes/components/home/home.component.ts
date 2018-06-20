
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {  WeatherService } from '../../../core/services/weather/weather.service';
import { DataStorageService } from '../../../core/services/data-storage/data-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {

  private disableSend = true;
  private errorMsgVissibility = 'hidden';
  private errorMsgColor = 'Red';

  constructor(
    private weatherService: WeatherService,
    private router: Router ,
    private dataStorageService: DataStorageService) { }

  private changeInput(event) {
    if (event.target.value.length > 0) {
      this.disableSend = false;
    } else {
      this.disableSend = true;
    }
  }
  private onSubmit(value) {
    this.weatherService.getCityWeather(value).subscribe(
      (res: any) => {
        console.log(res);
        this.dataStorageService.setWeatherData(res);
        this.dataStorageService.setForecastData(res.forecast.forecastday);
        this.router.navigateByUrl('/city');},
      (error)=>{ this.errorMsgVissibility = 'visible'})
  }
    
  ngOnInit(){}

}
