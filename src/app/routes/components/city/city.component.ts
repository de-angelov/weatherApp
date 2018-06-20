import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../../../core/services/data-storage/data-storage.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  private reportData = this.dataStorageService.getWeatherData();

  constructor(private router: Router, private dataStorageService: DataStorageService) { }

  

  ngOnInit() {

  }

}
