import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataStorageService } from '../../core/services/data-storage/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HasDataGuard implements CanActivate {

  constructor(private dataStorageService: DataStorageService,private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const hasData = this.dataStorageService.checkData();
    if (hasData) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    };
  }
}
