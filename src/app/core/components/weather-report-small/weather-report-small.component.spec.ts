import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportSmallComponent } from './weather-report-small.component';

describe('WeatherReportSmallComponent', () => {
  let component: WeatherReportSmallComponent;
  let fixture: ComponentFixture<WeatherReportSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherReportSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
