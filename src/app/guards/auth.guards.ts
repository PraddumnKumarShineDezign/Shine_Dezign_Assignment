import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router, private _CommonService:CommonService) {}
  // data:boolean=true;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Check if the user is ADMIN OR NOT  
    if (localStorage.getItem('role') === 'ADMIN') {
      return true;
    //  this.router.navigate(['/admin-dashboard']);
    
    }
    // this.router.navigate(['/user-dashboard']);
    this._CommonService.showError('Access Denied!', 'Not permissions to access this route.')
    return false;
  
  }
  }
  
