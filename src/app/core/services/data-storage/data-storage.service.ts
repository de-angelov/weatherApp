import { Injectable } from '@angular/core';
import { iWeatherWrapper } from '../../models/iWeatherWrapper';

@Injectable()
export class DataStorageService {

  private weatherData: iWeatherWrapper = <iWeatherWrapper>{};

  private forecastData: iWeatherWrapper[]=[];

  private hasData: boolean = false;


  constructor() { }
  public setWeatherData(data: any): void{
    this.convertDataToWeatherWrapper(this.weatherData, data);
    this.hasData= true;
  }

  public setForecastData(data: any): void{
    data.forEach((el) => {
      let day:iWeatherWrapper = <iWeatherWrapper>{};
      day.feelsLike = "";
      day.humidity = el.day.humidity;
      day.wind = el.day.wind_kph;
      day.cityName = "";
      day.temperature = el.day.avgtemp_c;
      day.description = el.day.condition.text;
      day.descriptionIcon = el.day.condition.icon;
      day.localDateTime =  el.date;
    this.forecastData.push(day)
    });
    this.hasData= true;
  }

  private convertDataToWeatherWrapper(property: iWeatherWrapper, data: any): void{
    property.feelsLike = data.current.feelslike_c;
    property.humidity = data.current.humidity;
    property.wind = data.current.wind_kph;
    property.cityName = data.location.name;
    property.temperature = data.current.temp_c;
    property.description = data.current.condition.text;
    property.descriptionIcon = data.current.condition.icon;
    property.localDateTime =  data.location.localtime;
  }

  public getWeatherData(): iWeatherWrapper{
    return this.weatherData;
  }

  public getForecastData(): iWeatherWrapper[]{
    return this.forecastData;
  }

  public checkData(): boolean{
    return this.hasData;
  }
}
