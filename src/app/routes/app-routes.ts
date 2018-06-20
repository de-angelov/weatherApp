import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { HomeComponent } from './components/home/home.component';
import { MoreComponent } from './components/more/more.component';
import { HasDataGuard } from './guards/has-data.guard';


export const  ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'city', canActivate: [HasDataGuard], component: CityComponent },
    { path: 'more', canActivate: [HasDataGuard], component: MoreComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home'},
];
