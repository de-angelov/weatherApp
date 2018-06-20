import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {

  }

  public getCityWeather(name: string): Observable<object> {
    return this.http.get(`http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&q={${name}}&days=10`);
  }
}
