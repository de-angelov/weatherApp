import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../../../core/services/data-storage/data-storage.service';
import { iWeatherWrapper } from '../../../core/models/iWeatherWrapper';


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  private forcastData: iWeatherWrapper[] = this.dataStorageService.getForecastData();
  private reportData: iWeatherWrapper = this.dataStorageService.getWeatherData();

  constructor(
    private router: Router, 
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    console.log('more', this.forcastData);
  }

}
