import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherReportComponent } from '../../components/weather-report/weather-report.component';
import { WeatherReportSmallComponent } from '../../components/weather-report-small/weather-report-small.component';
import { WeatherService } from '../../services/weather/weather.service';
import { DataStorageService } from '../../services/data-storage/data-storage.service';
import { FlexLayoutModule, BREAKPOINTS, BREAKPOINT, DISABLE_DEFAULT_BREAKPOINTS, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';


const MY_CUSTOM_BREAKPOINTS = [
  {
    alias: "lt-md",
    mediaQuery: "(max-width: 766px)",
    overlapping: true,
  },
  {
    alias: "gt-sm",
    mediaQuery: "(min-width: 767px)",
    overlapping: true,
  }
];




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  declarations: [
    WeatherReportComponent,
    WeatherReportSmallComponent,
  ],
  providers: [
    { provide: WeatherService, useClass: WeatherService },
    { provide: DataStorageService, useClass: DataStorageService },
    { provide: DISABLE_DEFAULT_BREAKPOINTS, useValue: true},
    { provide: BREAKPOINT, useValue: MY_CUSTOM_BREAKPOINTS },
  ],
  exports: [
    WeatherReportComponent,
    WeatherReportSmallComponent,
    HttpClientModule,
    FlexLayoutModule,
  ],
})
export class SharedModule { }
