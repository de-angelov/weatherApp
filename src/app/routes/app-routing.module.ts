import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routes';
import { HomeComponent } from './components/home/home.component';
import { MoreComponent } from './components/more/more.component';
import { CityComponent } from './components/city/city.component';
import { SharedModule } from '../core/modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataStorageService } from '../core/services/data-storage/data-storage.service';
import { HasDataGuard } from './guards/has-data.guard';



@NgModule ({
    declarations: [
        HomeComponent,
        MoreComponent,
        CityComponent,
        
    ],
    providers:[
        DataStorageService,
        HasDataGuard,
    ],
    imports: [
        RouterModule.forRoot(ROUTES),
        SharedModule,
        FormsModule,
        CommonModule,
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
